<?php

// Thumbnails
add_theme_support('post-thumbnails');
add_theme_support('post-formats', array('description'));

// Menus
register_nav_menus(array('main_menu' => 'Main Menu'));

//  thumbnails
set_post_thumbnail_size(200, 200);

function sl_scripts_styles()
{
    wp_enqueue_style('boostrap-css', get_template_directory_uri() . '/css/bootstrap.min.css', false, '1.0.0');
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', false, '1.0.0');
    wp_enqueue_script('boostrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('menu', get_template_directory_uri() . '/js/menu.js', array(), '1.0.0', true);

    if (is_front_page()) {
        wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
    } else {
        wp_enqueue_script('sub', get_template_directory_uri() . '/js/sub.js', array(), '1.0.0', true);
    }
}

add_action('wp_enqueue_scripts', 'sl_scripts_styles');


add_action('after_setup_theme', 'sleepinglion_language_setup');
function sleepinglion_language_setup()
{
    load_theme_textdomain('sleepinglion', get_template_directory() . '/languages');
}

add_filter('body_class', 'my_class_names');
function my_class_names($classes)
{
    $menu_object = wp_get_nav_menu_object($menu);

    // add 'class-name' to the $classes array
    $classes[] = 'class-name';
    // return the $classes array
    return $classes;
}


function limit_posts_per_archive_page()
{
    if (is_category(31)) {
        set_query_var('posts_per_archive_page', 5);
    } // or use variable key: posts_per_page
}

add_filter('pre_get_posts', 'limit_posts_per_archive_page');



/**
 * @name Setup Theme Support
 */
require get_template_directory() . '/sl_lib/menu/_menu_rendering.php';
