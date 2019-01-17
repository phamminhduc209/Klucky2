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
        var bodyMaxHeight = 1331;
        zoom = winHeight/bodyMaxHeight;
        /* Firefox */
        var winWidth = $(window).width();
        var widthFirefox = winWidth/zoom;
        var winWidths = $(window).height();
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
    Zoom();
    $(window).on('load resize', function() {
        Zoom();
    });

    // $(function() {
    //     $(".hasDatepicker").click(function() {
    //         var CssTop = $('#ui-datepicker-div').css('top').replace('px','');
    //         var CssLeft = $('#ui-datepicker-div').css('left').replace('px','');
    //         var cssZoom = $('#Zoom').css('zoom').replace('px','');

    //         var newCssTop = CssTop * cssZoom;
    //         var newCssLeft = CssLeft * cssZoom;

    //         if(navigator.userAgent.indexOf("Firefox") != -1) {
    //             var cssTransform = $('#Zoom').css('moz-transform').replace('px','');
    //             var newCssTop_Transform = CssTop * cssTransform;
    //             var newCssLeft_Transform = CssLeft * cssTransform;
    //             $(this).parents('body').find('#ui-datepicker-div').css({
    //                 'top'   : newCssTop_Transform,
    //                 'left'  : newCssLeft_Transform,
    //             })
    //         } else {
    //             $(this).parents('body').find('#ui-datepicker-div').css({
    //                 'top'   : newCssTop,
    //                 'left'  : newCssLeft,
    //             });
    //             return false;
    //         }

    //         // $(this).parents('body').find('#ui-datepicker-div').css({
    //         //     'top'   : newCssTop,
    //         //     'left'  : newCssLeft,
    //         // })
    //     });
    // });

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

    // function NewCSS() {
    //     var CssTop = $('#ui-datepicker-div').css('top');
    //     console.log('top',CssTop);
    // }
    // NewCSS();


    $(document).on('click', '.kl_fixed .kl_item .kl_btnclose', function (e) {
        e.preventDefault();
        $(this).parent().hide();
    });

    $(window).on('load',function(){
        $('.kl_activeLoad').modal('show');
    });
    
})(jQuery); // End of use strict