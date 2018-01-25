$(document).ready(function(){
    var page_id = $('#page-inner').data('page-id');
    var sermon_id = $('.series-content').data('sermon-id');
    $.get("http://localhost/wp-json/wp/v2/series/" + page_id , function(data, status){
        //results = $.parseJSON(data);
        sermon_url = data["cmb2"]["sermons_metabox"]["sermons"][sermon_id - 1]["sermon_video_link"];
        load_video(sermon_url)
    });
});

function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

function load_video(url) {
    var videoId = getId(url);
    var iframeMarkup = '<div class="series-video"><iframe width="560" height="315" src="//www.youtube.com/embed/'
        + videoId + '" frameborder="0" allowfullscreen></iframe></div>';
    $('#sermon-video').append(iframeMarkup);
}
