(function() {

    // Prevents some flickering
    $('#video').css("visibility", "hidden");

    // Fluid column video is inside of
    var fluidParent = $(".video_section"),
        newWidth, newHeight;

    // Gets called when video needs resizing
    function resizeVideo() {
        newWidth = fluidParent.width();
        // 1.78125 == Aspect Ratio of my videos
        sublimevideo.resize('video', newWidth, newWidth/1.78125);
    };

    $(window).resize(function() {
        resizeVideo();
    });

    // When the resources are ready,
    // load up the video and size it correctly
    sublimevideo.ready(function() {
        sublimevideo.prepare('video');
        resizeVideo();
    });

}());