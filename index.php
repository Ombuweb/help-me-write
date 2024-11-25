<?php
/**
 * Plugin Name: Help Me Write
 * Description: A Chrome built-in AI-powered writing assistant that helps you write better content for your product.
 * Version: 1.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
include 'functions.php';
add_action('admin_enqueue_scripts', 'help_me_write_enqueue_scripts');
function help_me_write_enqueue_scripts()
{
    wp_enqueue_script('marked', 'https://cdn.jsdelivr.net/npm/marked/marked.min.js', array(), '15.0.0', true);
    wp_enqueue_script('help-me-write', plugin_dir_url(__FILE__) . 'js/help-me-write.js', array('jquery'), '1.0', true);

    wp_enqueue_style('help-me-write', plugin_dir_url(__FILE__) . 'css/help-me-write.css', array(), '1.0');
}

require_once plugin_dir_path(__FILE__) . 'help-me-write.php';