<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Vine
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body>
<div id="page">
	<div <?php  body_class();  ?>  data-page-id="<?php the_ID(); ?>" id="page-inner">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'vine' ); ?></a>
	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			if(get_custom_logo()) :
				?>
				<div class="site-logo">
					<?php
					the_custom_logo();
					?>
				</div>
				<?php
				else :
					if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php
					endif;
			endif;
		 	?>
		</div><!-- .site-branding -->
		<div class="site-menu">
			<a href="javascript:;"><img src="<?php echo get_template_directory_uri(); ?>/images/menu.svg"/></a>
		</div>
		<nav id="site-navigation" class="main-navigation">
			<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				) );
			?>
		</nav><!-- #site-navigation -->
		<div class="mobile-navigation">
			<div class="mn-inner">
				<h2>Menu</h2>
					<?php
						wp_nav_menu( array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						) );
					?>
			</div>
		</div>
	</header><!-- #masthead -->
	<div id="content" class="site-content">
	<?php if(!is_front_page() && !is_singular('series') && !is_home()){ ?>
		<?php if ( get_header_image() ) : ?>
			<div class="header-graphic" style="background:url(<?php header_image(); ?>) ;" >

			</div>
		<?php endif; ?>
	<?php } ?>
