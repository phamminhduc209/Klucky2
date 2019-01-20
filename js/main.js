(function($){
    "use strict";

    // Change viewport
    function ChangeWiewport() {
        if (screen.width < 750) {
            $("#viewport").attr("content", "width=750");
        }else{
            $("#viewport").attr("content", "width=device-width, initial-scale=1");
        }
    }
    ChangeWiewport();
    $(window).on('load resize', function() {
        ChangeWiewport();
    });

    // Zoom Web on in all browser
    function Zoom() {
        var winHeight = $(window).height();
        var zoom = 1;
        var bodyMaxHeightHome = 1331;
        var bodyMaxHeight = 749;
        var zoom_home = winHeight/bodyMaxHeightHome;
        zoom = winHeight/bodyMaxHeight;
        /* Firefox */
        var winWidth = $(window).width();
        var widthFirefox = winWidth/zoom;
        var widthFirefox_home = winWidth/zoom_home;
        var winWidths = $(window).height();
        
        $('body').each(function () {
            if ($(this).is("#kl_home")) {
                if(navigator.userAgent.indexOf("Firefox") != -1) {
                    $('#Zoom').css({
                        '-moz-transform': 'scale('+zoom_home+')',  /* Firefox */
                        'transform-origin': '0 0',
                        'width': widthFirefox_home,
                    });
                } else {
                    $('#Zoom').css({
                        'zoom': zoom_home,
                    });
                }
            } else {
                if(navigator.userAgent.indexOf("Firefox") != -1) {
                    $('#Zoom').css({
                        '-moz-transform': 'scale('+zoom+')',  /* Firefox */
                        'transform-origin': '0 0',
                        'width': widthFirefox,
                    });
                } else {
                    $('#Zoom').css({
                        'zoom': zoom,
                    });
                }
            }
        });
    }
    Zoom();
    $(window).on('load resize', function() {
        Zoom();
    });

    // Slider Rewards
    $('.kl_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();

    if ($('.wrapper2').hasClass('wrapper_kl_rewards')) {
        $('.wrapper2').closest('body').addClass('kl_rewards_body');   
    }

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='//www.youtube.com']"),
        // The element that is fluid width
        $fluidEl = $("body");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        $(this)
        .data('aspectRatio', this.height / this.width)
        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });

    // When the window is resized
    $(window).resize(function() {
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
            var $el = $(this);
            $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));
        });
        // Kick off one resize to fix all videos on page load
    }).resize();

    $(document).on('click', '.kl_fixed .kl_item .kl_btnclose', function (e) {
        e.preventDefault();
        $(this).parent().hide();
    });

    $(window).on('load',function(){
        $('.kl_activeLoad').modal('show');
    });

    // Slide Carousel
    $(document).ready(function() {
        $(".owl-carousel").each(function(index, el) {
        var config = $(this).data();
        config.navText = ['<img src="images/slider-prev.png" alt="slder-prev">','<img src="images/slider-next.png" alt="slder-next">'];
        config.smartSpeed="800";        
        if($(this).hasClass('owl-style2')){
            config.animateOut="fadeOut";
            config.animateIn="fadeIn";    
        }
        if($(this).hasClass('dotsData')){
            config.dotsData="true";
        }
        $(this).owlCarousel(config);
        });
    });
    
})(jQuery); // End of use strict