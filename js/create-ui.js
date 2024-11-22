const sendIcon = `
<span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
  </svg>
</span>
`;
const stopIcon = `
<span class="hide">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M6 6h12v12H6z"/>
</svg>
</span>`;
const acceptIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2l-2.5-2.5 1.4-1.4 1.1 1.1 3.5-3.5 1.4 1.4-4.9 4.9z"/>
    </svg>
`;
function createButton(id, text, state) {
  if (id === 'accept') {
    return `<button id="${id}" aria-pressed="${state}" class="accept" type="button" aria-label="Accept">${acceptIcon}</button>`;
  } else {
    return `<button id="${id}" aria-pressed="${state}" type="button">${sendIcon}${stopIcon}</button>`;
  }
}

function createTextarea(id, name, rows, cols) {
  return `<textarea id="${id}" name="${name}" rows="${rows}" cols="${cols}">
  help me write a product description
  </textarea>`;
}

function creatingActivityIndicator() {
  return `  <div class="pulsing-dots hide">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`;
}

function getUIString() {
  return `
      <div class="hmw-wrapper">
          <h3>Help Me Write</h3>
          <div id="result" class="result"></div>
          <div id="accept-result">
              <h4>Are you happy with the result?</h4>
              ${createButton('accept', 'Accept')}
          </div>
          <h4 id="subheading">How I help you with your product description?</h4>
          <div class="prompt">
          ${creatingActivityIndicator()}
          <label for="prompt">
              ${createTextarea('prompt', 'prompt', 4, 50)}
          </label>
          ${createButton('submit', 'Submit', false, sendIcon)}
          </div>
      </div>
    `;
}

window.getUIString = getUIString;
window.icons = {
  sendIcon,
  stopIcon,
  acceptIcon,
};
