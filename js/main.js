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




    //$('.medium-select').chosen({
    //    disable_search: true,
    //    inherit_select_classes: true,
    //    width: "200px"
    //});
    //$('.small-select').chosen({
    //    disable_search: true,
    //    inherit_select_classes: true,
    //    width: "100px"
    //});
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



