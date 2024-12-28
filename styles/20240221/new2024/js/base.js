$(function() {
    var mobileMaxWidth = 767;

    function isMobile() {
        if ($(window).width() <= mobileMaxWidth) return true;
        return false;
    }

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 0) {
    //         $('body').addClass('scrolled')
    //     } else {
    //         $('body').removeClass('scrolled');
    //     }
    // });

    // var swiper = new Swiper(".swiper-shorts", {
    //     // effect: "cards",
    //     // grabCursor: true,
    //     spaceBetween: 30,
    //     effect: "fade",
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //     },
    // });

    var swiper = new Swiper(".x-swiper-main", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".x-swiper-centered", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper_2 = new Swiper(".x-swiper-basic", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper_666 = new Swiper(".x-swiper-lineup", {
        //effect: "flip",
        spaceBetween: 0,
        loop: true,
        speed:1,
        slidesPerView: 3,
        slidesPerGroup: 3,
        watchSlidesProgress: true,
        autoplay: {
            delay: 4000,
        },
        onlyExternal: true,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',

        breakpoints: {
            500: { 
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        },
    });

    var swiper_23 = new Swiper(".x-swiper-basic-tabs", {
        //loop: true,
        spaceBetween: 10,
        slidesPerView: 'auto',
        //freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper_233 = new Swiper(".x-swiper-basic-tabs-content", {
        //loop: true,
        spaceBetween: 10,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_23,
        },
        on: {
            reachEnd: function () {
                this.$el.addClass('swiper-reached-end');
            },
            fromEdge: function () {
                this.$el.removeClass('swiper-reached-end');
            }
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper_22 = new Swiper(".x-swiper-2х", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    var swiper_33 = new Swiper(".x-swiper-about", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        breakpoints: {
            768: { //1259
                spaceBetween: 20,
            },
        },
    });

    if (!isMobile()) {
        var swiper_3 = new Swiper(".x-swiper-basic-mob-static", {
            spaceBetween: 10,
            slidesPerView: 'auto',
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: { //1259
                    spaceBetween: 20,
                },
            },
        });
    }

    var swiper = new Swiper(".x-swiper-tabs", {
        spaceBetween: 5,
        //effect: 'fade',
        slidesPerView: 3,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            769: { //1259
                slidesPerView: 7,
                slidesPerGroup: 7,
                freeMode: true,
            },
            500: { //376
                slidesPerView: 5,
            },
        },
    });

    var swiper_4 = new Swiper(".x-swiper-article", {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.x-search-target').click(function() {
        var root = $(this).parents('.header');

        if (root.hasClass('x-search-active')) {
            root.removeClass('x-search-active')
        } else {
            root.addClass('x-search-active')
        }
    });

    $('.x-cut').click(function() {
        var root = $(this).parent();

        root.addClass('x-cut-show')
    });

    $('.x-menu-drop-target').mouseenter(function() {
        $(this).find('.x-menu-drop').fadeIn();
    }).mouseleave(function() {
        $(this).find('.x-menu-drop').hide();
    });

});
