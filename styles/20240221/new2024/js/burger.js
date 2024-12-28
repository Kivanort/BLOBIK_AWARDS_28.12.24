$(function () {
    function burgerToggle(root) {
        if (root.hasClass('x-burger-active')) {
            root.removeClass('x-burger-active')
            $('body')
                .removeClass('x-modal-opened x-modal-show-header x-mobile-menu-opened')
                .find('.x-mobile-menu')
                .fadeOut(100)
                .parents('.x-drop')
                .removeClass('x-drop-opened');
        } else {
            root.addClass('x-burger-active')
            $('body')
                .addClass('x-modal-opened x-modal-show-header x-mobile-menu-opened')
                .find('.x-mobile-menu')
                .fadeIn(100)
                .parents('.x-drop')
                .addClass('x-drop-opened');
        }
    }

    $('.x-burger').click(function() {
        var burger = $(this);
        burgerToggle(burger);
        $(window).scrollTop(0);

        $(document).mouseup(function(e) {
            if ($('.x-mobile-menu-opened').length) {
                var window = $('.x-mobile-menu-opened').find('.header-frame');
    
                if (!window.is(e.target) 
                    && window.has(e.target).length === 0
                    && !burger.is(e.target) 
                    && burger.has(e.target).length === 0) {
                    burgerToggle(burger);
                }
    
                e.stopPropagation();
            }
        });

        return false;
    });
});