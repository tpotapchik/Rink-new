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
    $("#datepicker").datepicker({
        inline: true
    });
    $('.mobile-menu,.fade').click(function () {
        $('.fade').toggle();
        $('.navigation').toggle();
    });

    $('.question-block').click(function () {
        var _this = $(this);
        _this.closest('.question-answer').find('.answer-block').slideToggle(200);
        _this.toggleClass('opened');
    });

    $(".popup").fancybox();

    //var isShowInPopup = document.body.clientWidth >= 944;
    //
    //$(".popup").click(function () {
    //    if (isShowInPopup) {
    //        $.fancybox({
    //            href:'#popup'
    //        });
    //    } else {
    //        var _offset = $('.form-block.popup-registration').offset().top;
    //        $('body,html').animate({scrollTop: _offset}, 400)
    //    }
    //});
    //
    $(window).resize(function () {
        //isShowInPopup = document.body.clientWidth >= 944;
        //if(!isShowInPopup){
        //    $.fancybox.close();//закроет любой открытый в текущий момент попап
        //}
        resizeReservText();
    });



    /*NOT DELETE*/
    //$('.basket').click(function(){
    //    $('.main-pic,.main-tab-item-wrapper,.form-column.numbers,.form-column.billing,.order-tab').toggle();
    //    $('.form-column.check-result').toggle();
    //});


    $('.questions,.nav-link.faq').click(function () {
        var tab_faq = $('.main-tab-item.faq');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    });
    $('.buy-tickets,.reserve-tickets, .nav-link.tickets').click(function () {
        var tab_faq = $('.main-tab-item.reserv');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    });
    $('.nav-link.to-home').click(function () {
        var tab_faq = $('.main-tab-item.welc');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    });

    function resizeReservText() {
        var maxHeight = 0;
        var $item = $('.reservation-item ._description');
        $item.each(function () {
            $(this).height('auto');
            var $h = $(this).height();
            if ($h > maxHeight) {
                maxHeight = $h;
            }
        });
        $item.each(function () {
            var $h = $(this).height();
            if ($h < maxHeight) {
                $(this).height(maxHeight);
            }
        });
    }

    $('.main-tab-item.reserv').click(function () {
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



