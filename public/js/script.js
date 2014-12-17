$(document).ready(function () {
    var menu_is_open = false;
    var mobile = false;
    var small_mobile = false;
    if($(window).width() < 670) {
        mobile = true;
        if($(window).width() <= 400) {
            small_mobile = true;
        } else {
            $('.navigation_bar a').css('width', (($(window).width() / 4) - 4) + 'px').css('border-left', 0).css('border-right', 0);
        }
        $('.navigation_bar').toggleClass('collapsed');
    } else {
//					$('.navigation_bar').removeClass('pull-right');
        $('.browse_header').css('width', $(window).width() + 'px').css('position', 'relative').css('left', '-20px');
    }
    /* Cookie Names and Meanings
     *
     * c = cookie_notice | If true, do not show the cookie notice. If not true, show it.
     * s = splash_page   | If true, do not show the splash page.   If not true, show it.
     *
     */
    if (!$.cookie('c')) {
        $('#cookie_notice').show();
        $.cookie('c', true);
    } else {
        $('#cookie_notice').remove();
    }

    if (!$.cookie('s')) {
        $('#header').height($(window).height());
        $.cookie('s', true);
    }

    if(mobile) {
        var menu_toggle = $('#menu-toggle');
        $(menu_toggle).click(function() {
            $('.navigation_bar').toggleClass('collapsed');
            menu_is_open = !menu_is_open;
        });
    }

    setInterval(function () {
        if(document.getElementById('header') !== null) {
            var headerOffset = document.getElementById('header').getBoundingClientRect();
            var headerBottom = headerOffset.bottom;
            if (headerBottom >= 0) {
                $('#navigation').css('position', 'relative');
                if($(window).width() >= 1280) {
                    $('#container').css('padding-top', '4px');
                } else {
                    $('#container').css('padding-top', '0');
                }
            }
        }
        var navigationOffset = document.getElementById('navigation').getBoundingClientRect();
        var navigationTop = navigationOffset.top;

        if (navigationTop <= 0) {
            $('#navigation').css('position', 'fixed').css('top', 0);
            if(mobile && menu_is_open) {
                if(small_mobile) {
                    $('#container').css('padding-top', '200px');
                } else {
                    $('#container').css('padding-top', '108px');
                }
            } else {
                if(small_mobile) {
                    $('#container').css('padding-top', '40px');
                } else {
                    if($(window).width() < 480) {
                        $('#container').css('padding-top', '40px');
                    } else {
                        $('#container').css('padding-top', '60px');
                    }
                }
            }
        }
    }, 25);
});