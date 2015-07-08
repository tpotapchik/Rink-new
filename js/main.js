$(function () {
    $('input[type="text"], input[type="email"], input[type="tel"], textarea').focus(function () {
        if ($(this).val() == $(this).attr("title")) {
            $(this).val("");
        }
    }).blur(function () {
                if ($(this).val() == "") {
                    $(this).val($(this).attr("title"));
                }
            });


    var $tabItem = $('.main-tab-item');
    var $tabContent = $('.main-tab-content');
    var selectedStyle = 'selected';
    (function () {
        var ind = 0;
        $tabItem.each(function () {
            if ($(this).hasClass(selectedStyle)) {
                ind = $(this).index();
            }
        });
        $tabContent.hide().eq(ind).show();
    })();
    $tabItem.click(function () {
        var _ = $(this);
        var ind = _.index();

        if (!_.hasClass(selectedStyle)) {
            $tabItem.removeClass(selectedStyle);
            _.addClass(selectedStyle);
            $tabContent.hide().eq(ind).show();
        }
    });

    $('.large-select').chosen({
        disable_search: true,
        inherit_select_classes: true,
        width: "270px"
    });

    $('.medium-select').chosen({
        disable_search: true,
        inherit_select_classes: true,
        width: "150px"
    });
    $('.small-select').chosen({
        disable_search: true,
        inherit_select_classes: true,
        width: "75px"
    });
    $( "#datepicker" ).datepicker({
        inline: true
    });
    $('.mobile-menu').click(function(){
        $('.mobile-menu-block').fadeIn(400);
    });
    $('.icon-close').click(function(){
        $('.mobile-menu-block').fadeOut(400);
    });
    $('.questions').click(function () {
        var tab_faq = $('.main-tab-item.faq');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    });

    function resizeReservText(){
        var maxHeight = 0;
        var $item = $('.reservation-item ._description');
        $item.each(function(){
            $(this).height('auto');
            var $h = $(this).height();
            if ($h > maxHeight) {
                maxHeight = $h;
            }
        });
        $item.each(function(){
            var $h = $(this).height();
            if ($h < maxHeight) {
                $(this).height(maxHeight);
            }
        });
    }
    $('.main-tab-item.reserv').click(function() {
        resizeReservText();
    });
    $(window).resize(function(){
        resizeReservText();
    });





    //
    //$('.more-btn').click(function () {
    //    var $this = $(this);
    //    $this.closest('.main-text-block-wrap').find('.news-body').slideToggle();
    //
    //    if ($this.hasClass('opened')) {
    //        $this.text('Читать полностью');
    //    } else {
    //        $this.text('Свернуть');
    //    }
    //    $this.toggleClass('opened');
    //
    //});
    //
    //$(".fancybox").fancybox({
    //    nextEffect:'fade',
    //    prevEffect:'fade'
    //});
    //
    //$(window).on('scroll', function () {
    //    if ($(document).scrollTop() >= 900) {
    //        $('.back-top').fadeIn();
    //    }
    //    else {
    //        $('.back-top').fadeOut();
    //    }
    //});
    //
    //$('.back-top').click(function () {
    //    $('body,html').animate({
    //        'scrollTop': 0
    //    }, 400)
    //});
    //
    //$(".popup").fancybox();




});



