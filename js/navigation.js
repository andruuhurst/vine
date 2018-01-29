/* global vineScreenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function( $ ) {
	// var masthead, menuToggle, siteNavContain, siteNavigation;
    //
	// function initMainNavigation( container ) {
    //
	// 	// Add dropdown toggle that displays child menu items.
	// 	var dropdownToggle = $( '<button />', { 'class': 'dropdown-toggle', 'aria-expanded': false })
	// 		.append( vineScreenReaderText.icon )
	// 		.append( $( '<span />', { 'class': 'screen-reader-text', text: vineScreenReaderText.expand }) );
    //
	// 	container.find( '.menu-item-has-children > a, .page_item_has_children > a' ).after( dropdownToggle );
	// 	$('.dropdown-toggle').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    //
	// 	// Set the active submenu dropdown toggle button initial state.
	// 	container.find( '.current-menu-ancestor > button' )
	// 		.addClass( 'toggled-on' )
	// 		.attr( 'aria-expanded', 'true' )
	// 		.find( '.screen-reader-text' )
	// 		.text( vineScreenReaderText.collapse );
	// 	// Set the active submenu initial state.
	// 	container.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );
    //
	// 	container.find( '.dropdown-toggle' ).click( function( e ) {
	// 		var _this = $( this ),
	// 			screenReaderSpan = _this.find( '.screen-reader-text' );
	// 		e.preventDefault();
	// 		_this.toggleClass( 'toggled-on' );
	// 		_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
    //
	// 		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
    //
	// 		screenReaderSpan.text( screenReaderSpan.text() === vineScreenReaderText.expand ? vineScreenReaderText.collapse : vineScreenReaderText.expand );
	// 	});
	// }
    //
	// initMainNavigation( $( '.main-navigation' ) );
    //
	// masthead       = $( '#masthead' );
	// menuToggle     = masthead.find( '.menu-toggle' );
	// siteNavContain = masthead.find( '.main-navigation' );
	// siteNavigation = masthead.find( '.main-navigation > div > ul' );
    //
	// // Enable menuToggle.
	// (function() {
    //
	// 	// Return early if menuToggle is missing.
	// 	if ( ! menuToggle.length ) {
	// 		return;
	// 	}
    //
	// 	// Add an initial value for the attribute.
	// 	menuToggle.attr( 'aria-expanded', 'false' );
    //
	// 	menuToggle.on( 'click.vine', function() {
	// 		siteNavContain.toggleClass( 'toggled-on' );
    //
	// 		$( this ).attr( 'aria-expanded', siteNavContain.hasClass( 'toggled-on' ) );
	// 	});
	// })();
    //
	// // Fix sub-menus for touch devices and better focus for hidden submenu items for accessibility.
	// (function() {
	// 	if ( ! siteNavigation.length || ! siteNavigation.children().length ) {
	// 		return;
	// 	}
    //
	// 	// Toggle `focus` class to allow submenu access on tablets.
	// 	function toggleFocusClassTouchScreen() {
	// 		if ( 'none' === $( '.menu-toggle' ).css( 'display' ) ) {
    //
	// 			$( document.body ).on( 'touchstart.vine', function( e ) {
	// 				if ( ! $( e.target ).closest( '.main-navigation li' ).length ) {
	// 					$( '.main-navigation li' ).removeClass( 'focus' );
	// 				}
	// 			});
    //
	// 			siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' )
	// 				.on( 'touchstart.vine', function( e ) {
	// 					var el = $( this ).parent( 'li' );
    //
	// 					if ( ! el.hasClass( 'focus' ) ) {
	// 						e.preventDefault();
	// 						el.toggleClass( 'focus' );
	// 						el.siblings( '.focus' ).removeClass( 'focus' );
	// 					}
	// 				});
    //
	// 		} else {
	// 			siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' ).unbind( 'touchstart.vine' );
	// 		}
	// 	}
    //
	// 	if ( 'ontouchstart' in window ) {
	// 		$( window ).on( 'resize.vine', toggleFocusClassTouchScreen );
	// 		toggleFocusClassTouchScreen();
	// 	}
    //
	// 	siteNavigation.find( 'a' ).on( 'focus.vine blur.vine', function() {
	// 		$( this ).parents( '.menu-item, .page_item' ).toggleClass( 'focus' );
	// 	});
	// })();


	initMainNavigation( $( '.main-navigation' ) );
	initMainNavigation( $( '.mobile-navigation' ) );

	function initMainNavigation(container) {
		var chev = '<a href="javascript:;" alt="expand" class="expand"><i class="fa fa-angle-down" aria-hidden="true"></i></a>';
		container.find( '.menu-item-has-children, .page_item_has_children' ).append(chev);
	}

	$(window).on('scroll', function(){
		if($(this).scrollTop() > 0 ){
			$('.site-header').addClass('scroll');
		}else{
			$('.site-header').removeClass('scroll');
		}
	});

})( jQuery );
