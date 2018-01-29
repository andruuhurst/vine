<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Vine
 */

get_header();
?>

	<div id="primary" class="content-area series-content" data-sermon-id="<?php echo get_query_var("sermon");?>">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) : the_post();
			get_sidebar('series');
			get_template_part( 'template-parts/content-sermon');

			the_post_navigation();

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
