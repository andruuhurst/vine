<?php
/**
 * Template Name: Front Page
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vine
 */

get_header();
$home_dir = get_template_directory_uri();
?>
	<div class="hero">
		<?php
		$args = array(
			'numberposts' => 1,
			'orderby' => 'post_date',
			'order' => 'DESC',
			'post_type' => 'series',
			'post_status' => 'publish',
			'suppress_filters' => true
		);

		$recent_posts = wp_get_recent_posts( $args );
		$post_meda = $recent_posts[0];

		$series_thumbnail = get_the_post_thumbnail_url($post_meda['ID']);
		// Grab the sermon from the database
		$sermons = get_post_meta( $post_meda['ID'], 'sermons', true );
		$sermon = end($sermons);
		$sermonId = count($sermons) - 1;
		$link = get_permalink($post_meda['ID']) .'?sermonID='. $sermonId  .'/';
		if(isset($sermon['sermon_speaker'])){
			$speaker = $sermon['sermon_speaker'];
		}
		if(isset($sermon['sermon_location'])){
			$location = $sermon['sermon_location'];
		}
		if(isset($sermon['sermon_title'])){
			$title = $sermon['sermon_title'];
		}
		if(isset($sermon['sermon_video_link'])){
			$video_url = $sermon['sermon_video_link'];
		}
		?>
		<div class="series-graphic" style="background:url(<?php echo $series_thumbnail; ?>) ;"></div>
		<div class="sermon-description">
			<div class="play">
				<a href="<?php echo $link; ?>">
					<i class="fa fa-play" aria-hidden="true"></i>
				</a>
			</div>
			<div class="desc">
				<h2><?php echo $title; ?></h2>
				<p><?php echo $speaker; ?></p>
			</div>
		</div>
	</div>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>

			<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_format() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
