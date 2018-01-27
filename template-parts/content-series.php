<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vine
 */

 $sermons = get_post_meta( get_the_ID(), 'sermons', true );
 $sermonID =  get_query_var("sermon");
 $thisSermon = $sermons[$sermonID - 1];


?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
            $sermonTitle = $thisSermon['sermon_title'];
		?>
        <h2><?php echo $sermonTitle; ?></h2>
	</header><!-- .entry-header -->
    <?php

    $url = $thisSermon['sermon_video_link'];
    preg_match('/[\\?\\&]v=([^\\?\\&]+)/', $url, $matches);
    $id = $matches[1];
    ?>

	<div class="entry-content">
        <div class="sermon-video">
            <iframe id="ytplayer" type="text/html"
            src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
            frameborder="0" allowfullscreen></iframe>
        </div>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php vine_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
