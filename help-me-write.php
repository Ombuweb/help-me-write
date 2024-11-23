<?php


/**
 * Adds a metabox to display the post's publication date.
 *
 * Adds a metabox in the edit form of posts of type "nuevo_contenido"
 * that shows the post's publication date.
 *
 * @since 1.0
 */
function add_help_me_write_plugin_metabox(): void
{

	add_meta_box(
		'write-with-ai', // Unique ID for the metabox
		'Write with AI', // Metabox title
		'render_help_me_write_plugin_metabox', // Callback function to display the content of the metabox
		'product', // Name of the post type to which the metabox belongs
		'normal', // Context in which the metabox is displayed (location of the metabox in the form)
		'high'
	);
}

add_action('add_meta_boxes', 'add_help_me_write_plugin_metabox');

/**
 * Renders the Help Me Write plugin metabox.
 *
 * This function outputs the HTML structure for the Help Me Write plugin's metabox,
 * which includes a result display area, an acceptance button, a subheading, a prompt
 * textarea, and a submit button. The metabox is designed to assist users in writing
 * product descriptions.
 *
 * @return void
 */
function render_help_me_write_plugin_metabox(): void
{
	include 'templates/main-ui.php';


}
