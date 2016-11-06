<?php 
function my_attachments( $attachments )
{
  $fields         = array(
    array(
      'name'      => 'title',                         // unique field name
      'type'      => 'text',                          // registered field type
      'label'     => __( 'Title', 'attachments' ),    // label to display
      'default'   => 'title',                         // default value upon selection
    ),
    array(
      'name'      => 'caption',                       // unique field name
      'type'      => 'textarea',                      // registered field type
      'label'     => __( 'Caption', 'attachments' ),  // label to display
      'default'   => 'caption',                       // default value upon selection
    ),
  );

  $args = array(

    // title of the meta box (string)
    'label'         => 'My Attachments',

    // all post types to utilize (string|array)
    'post_type'     => array('projects'),

    // meta box position (string) (normal, side or advanced)
    'position'      => 'normal',

    // meta box priority (string) (high, default, low, core)
    'priority'      => 'high',

    // allowed file type(s) (array) (image|video|text|audio|application)
    'filetype'      => null,  // no filetype limit

    // include a note within the meta box (string)
    'note'          => 'Attach files here!',

    // by default new Attachments will be appended to the list
    // but you can have then prepend if you set this to false
    'append'        => true,

    // text for 'Attach' button in meta box (string)
    'button_text'   => __( 'Attach Files', 'attachments' ),

    // text for modal 'Attach' button (string)
    'modal_text'    => __( 'Attach', 'attachments' ),

    // which tab should be the default in the modal (string) (browse|upload)
    'router'        => 'browse',

    // whether Attachments should set 'Uploaded to' (if not already set)
    'post_parent'   => false,

    // fields array
    'fields'        => $fields,

  );

  $attachments->register( 'my_attachments', $args ); // unique instance name
}

add_action( 'attachments_register', 'my_attachments' );
/**
 * Register our enhanced better_featured_image field to all public post types
 * that support post thumbnails.
 *
 * @since  1.0.0
 */

add_action( 'init', 'featured_images_init', 12 );

function featured_images_init() {

	$post_types = get_post_types( array( 'public' => true ), 'objects' );

	foreach ( $post_types as $post_type ) {

		$post_type_name     = $post_type->name;
		$show_in_rest       = ( isset( $post_type->show_in_rest ) && $post_type->show_in_rest ) ? true : false;
		$supports_thumbnail = post_type_supports( $post_type_name, 'thumbnail' );

		// Only proceed if the post type is set to be accessible over the REST API
		// and supports featured images.
		if ( $show_in_rest && $supports_thumbnail ) {

			// Compatibility with the REST API v2 beta 9+
			if ( function_exists( 'register_rest_field' ) ) {
				register_rest_field( $post_type_name,
					'featured_image',
					array(
						'get_callback' => 'featured_images_get_field',
						'schema'       => null,
					)
				);
			} elseif ( function_exists( 'register_api_field' ) ) {
				register_api_field( $post_type_name,
					'better_featured_image',
					array(
						'get_callback' => 'featured_images_get_field',
						'schema'       => null,
					)
				);
			}
		}
	}
}

/**
 * Return the better_featured_image field.
 *
 * @since   1.0.0
 *
 * @param   object  $object      The response object.
 * @param   string  $field_name  The name of the field to add.
 * @param   object  $request     The WP_REST_Request object.
 *
 * @return  object|null
 */
function featured_images_get_field( $object, $field_name, $request ) {

	// Only proceed if the post has a featured image.
	if ( ! empty( $object['featured_media'] ) ) {
		$image_id = (int)$object['featured_media'];
	} elseif ( ! empty( $object['featured_image'] ) ) {
		// This was added for backwards compatibility with < WP REST API v2 Beta 11.
		$image_id = (int)$object['featured_image'];
	} else {
		return null;
	}

	return wp_get_attachment_url( $image_id );
}


add_action( 'rest_api_init', 'rest_category_post_init' );
function rest_category_post_init() {

	$post_types = get_post_types( array( 'public' => true ), 'objects' );

	foreach ( $post_types as $post_type ) {

		$post_type_name     = $post_type->name;
		$show_in_rest       = ( isset( $post_type->show_in_rest ) && $post_type->show_in_rest ) ? true : false;

		// Only proceed if the post type is set to be accessible over the REST API
		// and supports featured images.
		if ( $show_in_rest ) {

			register_rest_field( $post_type_name,
				'categories',
				array(
					'get_callback' => 'rest_get_post_category',
					'schema'       => null,
				)
			);
			
		}
	}
}
/**
 * Get the value of the "starship" field
 *
 * @param array $object Details of current post.
 * @param string $field_name Name of field.
 * @param WP_REST_Request $request Current request
 *
 * @return mixed
 */
function rest_get_post_category( $object, $field_name, $request ) {
	// Only proceed if the post has a featured image.
	$post_categories = wp_get_post_categories( $object['id'] );
	$cats = array();
	     
	foreach($post_categories as $c){
	    $cat = get_category( $c );
	    if ($cat->parent !== 42) {
	    	$cats[] = $cat->name;
	    }

	}
	return $cats;
}

add_action( 'rest_api_init', 'rest_built_with_post_init' );
function rest_built_with_post_init() {

	$post_types = get_post_types( array( 'public' => true ), 'objects' );


			register_rest_field( 'projects',
				'built_with',
				array(
					'get_callback' => 'rest_get_post_built_with',
					'schema'       => null,
				)
			);
			
}
/**
 * Get the value of the "starship" field
 *
 * @param array $object Details of current post.
 * @param string $field_name Name of field.
 * @param WP_REST_Request $request Current request
 *
 * @return mixed
 */
function rest_get_post_built_with( $object, $field_name, $request ) {
	// Only proceed if the post has a featured image.
	$post_categories = wp_get_post_categories( $object['id'], array('parent' => 42) );
	$cats = array();
	     
	foreach($post_categories as $c){
	    $cat = get_category( $c );

	    $cats[] = $cat->name;
	}
	return $cats;
}

add_action( 'rest_api_init', 'rest_sliedshow_post_init' );
function rest_sliedshow_post_init() {

		$post_type_name     = 'projects';
		//$show_in_rest       = ( isset( $post_type->show_in_rest ) && $post_type->show_in_rest ) ? true : false;

		// Only proceed if the post type is set to be accessible over the REST API
		// and supports featured images.
		//if ( $show_in_rest ) {

			register_rest_field( $post_type_name,
				'slideshow_images',
				array(
					'get_callback' => 'rest_get_post_slideshow_attachments',
					'schema'       => null,
				)
			);
			
		//}

}
/**
 * Get the value of the "starship" field
 *
 * @param array $object Details of current post.
 * @param string $field_name Name of field.
 * @param WP_REST_Request $request Current request
 *
 * @return mixed
 */
function rest_get_post_slideshow_attachments( $object, $field_name, $request ) {
	$attachmentsArray = array();
	$attachments = new Attachments( 'my_attachments', $object['id'] );
	if( $attachments->exist() ) {
		while( $attachment = $attachments->get() ) {
			$attachmentsArray[] = array(
				'title' => $attachments->field( 'title' ),
				'caption' => $attachments->field( 'caption' ),
				'url' => $attachments->url()
			);
		}
	}
	return $attachmentsArray;
}

add_action( 'rest_api_init', 'register_project_url' );
function register_project_url() {
    register_rest_field( 'projects',
        'project_url',
        array(
            'get_callback'    => 'get_project_url',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

/**
 * Get the value of the "starship" field
 *
 * @param array $object Details of current post.
 * @param string $field_name Name of field.
 * @param WP_REST_Request $request Current request
 *
 * @return mixed
 */
function get_project_url( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name, true );
}
