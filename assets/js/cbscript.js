
jQuery(document).ready(function($){

    /*********Theme PAth*********/

    var cbx_path = window.location.protocol + '//' + window.location.host;
    var pathArray = window.location.pathname.split( '/' );
    for (i = 1; i < (pathArray.length - 1); i++) {
        cbx_path += '/';
        cbx_path += pathArray[i];

    }

    /*********Theme Path End*********/


    // -------------------------------------------------------------
    // WOW
    // -------------------------------------------------------------
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }

    );
    wow.init();

    // -------------------------------------------------------------
    // WOW END
    // -------------------------------------------------------------

    // -------------------------------------------------------------
    // COUNTDOWN START

    //get the values from data attributes
    var cbxcountdown = $('#cbxcountdown');
    var countdown_year  = cbxcountdown.data('year');
    var countdown_month = cbxcountdown.data('month');
    var countdown_day   = cbxcountdown.data('day');

    // -------------------------------------------------------------
    if ( $('.lz-circular-countdown-container').length ) {
        $('.lz-circular-countdown-container').final_countdown({
            now: Date.now()/1000,
            end: new Date(countdown_year, countdown_month, countdown_day).getTime()/1000,
            selectors: {
                value_seconds: '.lz-circular-clock-seconds .lz-circular-val',
                canvas_seconds: 'lz-circular-canvas_seconds',
                value_minutes: '.lz-circular-clock-minutes .lz-circular-val',
                canvas_minutes: 'lz-circular-canvas_minutes',
                value_hours: '.lz-circular-clock-hours .lz-circular-val',
                canvas_hours: 'lz-circular-canvas_hours',
                value_days: '.lz-circular-clock-days .lz-circular-val',
                canvas_days: 'lz-circular-canvas_days'
            }
        });
    }

    // -------------------------------------------------------------
    // COUNTDOWN END
    // -------------------------------------------------------------


    //smooth scroll
    $('.gotome').smoothScroll(
        {
            speed: 600
        }
    );

    /*Menu Scroll start*/
    var s = $("#menu-offscroll");
    var pos = s.position();
    var scrollmenu = $("#menu-offscroll");
    var scrollmenu_pos = scrollmenu.position();
    var windowpos = $(window).scrollTop();

    if(windowpos - scrollmenu_pos.top > 0){
        s.addClass("menu-onscroll");
    }
    else{
        s.removeClass("menu-onscroll");
    }

    $(window).scroll(function() {
        windowpos = $(window).scrollTop();
        if(windowpos - scrollmenu_pos.top > 0){
            s.addClass("menu-onscroll");
        }
        else{
            s.removeClass("menu-onscroll");
        }
    });
    /*Menu Scroll end*/

});//jQuery DOM READY END
