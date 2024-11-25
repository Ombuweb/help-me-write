<div class="hmw-wrapper">
    <div class="hmw-wrapper">
        <div id="result" class="result">
            <div class="placeholder">
                The bot result goes here.
            </div>
        </div>
        <div class="accept-result">
            <h4>Are you happy with the result?</h4>
            <button id="accept" class="accept" type="button" aria-label="Accept">
                <span>Yes</span>
            </button>
        </div>
        <div class="console-info">
            Creating session...
        </div>
        <div class="prompt-wrapper hide">
            <h3 id="subheading">How can I help you with your product description?</h3>
            <div class="prompt">
                <?php include 'activity-indicator.php'; ?>
                <label for="prompt">
                    <textarea id="prompt" name="prompt" rows="4" cols="50"></textarea>
                </label>
                <button id="submit" class="submit" type="button" aria-label="Submit" aria-pressed="false">
                    <span class="send"><?php echo get_svg_icon('send'); ?></span>
                    <span class="square"><?php echo get_svg_icon('square'); ?></span>
                </button>
            </div>
        </div>
    </div>
</div>