(function( $ ) {

	$(function() {

		var $container;

		if ( $.isFunction( jQuery.fn.masonry ) ) {
			$container = $( '.cherry-grid.type-masonry .cherry-grid_list' );
			$container.masonry( $container.data( 'masonry-atts' ) );
		}

	});

})( jQuery );
