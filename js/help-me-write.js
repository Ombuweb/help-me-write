let session = null;
let conversationStarted = false;
let processing = false;
let abortController = new AbortController();
jQuery(document).ready(async function ($) {
  if (session) session.destroy();

  await createSession($);
  function clearResults() {
    $('#result').fadeOut(500, function () {
      // toggle the placeholder div
      togglePlaceholder();
    });
  }
  function togglePlaceholder() {
    $('.placeholder').toggle();
  }
  $('#accept').click(function () {
    acceptResult($);
  });
  $('#submit').click(async function () {
    clearResults();
    const description = getProductDescriptionToEnhance($);

    const message = $('#prompt').val();
    if (!message) {
      alert('Please provide a prompt');
      return;
    }
    let response = '';
    if (!conversationStarted) {
      response = await startConversation(message, description, $);
      conversationStarted = true;
    } else {
      response = await followUpConversation(message, $);
    }
    updateUIWithPromptResponse($, response);
  });
  // });
});

function toggleButtons($) {
  $('.square').toggle();
  $('.send').toggle();
  $('.pulsing-dots-wrapper').toggle();
}

async function startConversation(message, description, $) {
  console.log('Starting conversation', description, message);
  try {
    const promptTemplate = `${message}: ${description}`;
    const response = await prompt(promptTemplate, $);
    const responseInHTML = await getHTMLFromResponse(response);
    return responseInHTML;
  } catch (error) {
    console.error('Error prompting: startConversation:', error);
  }
}

async function followUpConversation(message, $) {
  try {
    const response = await prompt(message, $);
    const responseInHTML = await getHTMLFromResponse(response);
    return responseInHTML;
  } catch (error) {
    console.error('Error followUpConversation:', error);
  }
}

function getHTMLFromResponse(response) {
  try {
    const html = response ? marked.marked(response) : '';
    return html;
  } catch (error) {
    console.error('Error formatting response:', error);
  }
}

async function prompt(promptTemplate, $) {
  if (processing) {
    console.log('Processing, aborting');
    abortController.abort();
    processing = false;
    abortController = new AbortController();
    return;
  }
  try {
    processing = true;
    toggleButtons($);
    const response = await session.prompt(promptTemplate, {
      signal: abortController.signal,
    });
    return response;
  } catch (error) {
    console.error('Error prompting:', error);
  } finally {
    processing = false;
    toggleButtons($);
  }
}

function updateUIWithPromptResponse($, response) {
  $('#result').fadeOut(500, function () {
    $(this).html(response).fadeIn(500);
    setTimeout(function () {
      $('.accept-result').css('opacity', 1);
    });
  });

  if (response) $('#subheading').hide();
}
function informUserWithMessage($, message, options) {
  $('.console-info-error')
    .text(message)
    .css('color', options.isError ? 'red' : 'black')
    .css('font-size', options.isError ? '1.5em' : '1em')
    .css(
      'background-color',
      options.isError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'
    )
    .css('padding', '1em');
}
async function createSession($) {
  informUserWithMessage($, 'Creating prompt session...', { isError: false });
  try {
    if (typeof ai === 'undefined') {
      informUserWithMessage($, 'AI is not available', { isError: true });
      return;
    }
    const { available, defaultTemperature, defaultTopK, maxTopK } =
      await ai.languageModel.capabilities();
    if (available !== 'no') {
      session = await ai.languageModel.create({
        systemPrompt: `
        You are an e-commerce SEO specialist. Based on user request, you will help with 
        writing a product description. You either enhance a given description or
         you come up with one from scratch if no description is provided.
         If you need more context, ask for it.
        `,
      });
      if (session.prompt) {
        console.log('Prompting session created');
        $('.console-info-error').toggle();
        $('.prompt-wrapper').toggle();
      }
    } else {
      console.error('Language model is not available');
      throw new Error('Language model is not available');
    }
  } catch (error) {
    console.error('Error creating prompt session', error);

    informUserWithMessage($, "Prompting session couldn't be started", {
      isError: true,
    });
  }
}

function acceptResult($) {
  debugger;
  const result = $('#result').text();
  if (!result) {
    alert('No result to accept');
    return;
  }
  $('#content_ifr').contents().find('body').text(result);
}

function getProductDescriptionToEnhance($) {
  return $('#content_ifr').contents().find('body').text();
}
