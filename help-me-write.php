<?php


/**
 * Agrega un metabox para mostrar la fecha de publicación del post.
 *
 * Agrega un metabox en el formulario de edición de posts del tipo "nuevo_contenido"
 * que muestra la fecha de publicación del post.
 *
 * @since 1.0
 */
function add_help_me_write_plugin_metabox(): void
{

	add_meta_box(
		'write-with-ai', // ID único para el metabox
		'Write with AI', // Etiqueta para el metabox
		'render_help_me_write_plugin_metabox', // Función de callback para mostrar el contenido del metabox
		'product', // Nombre del post type al que pertenece el metabox
		'normal', // Contexto en el que se muestra el metabox (ubicacion del metabox en el formulario)
		'high' // Prioridad en la que se muestra el metabox
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
