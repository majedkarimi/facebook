'use strict';

/*--------------------------------------------- 
    # code hedaer part Arrow back and logo
----------------------------------------------*/

const arrowBacksearch = $('.arrow-back-header');
const boxSearch = $('.logo-header .search');
const logofacebook = $('.logo-header figure');
const iconSerch = $('.search .bi-search');
const inputSerchHeader = $('.logo-header .search input');
const boxRecentSearch = $('.recent-search');
const body = $('body');
const boxLogoSearch = $('.logo-header');
// Jquery
$(document).ready(function () {
    // click input search
    boxSearch.click(function () {
        logofacebook.hide(250);
        iconSerch.hide(250);
        inputSerchHeader.css({
            'padding': '0px 15px',
            'transition': 'all .5s'
        }, 1000);
        arrowBacksearch.show(250);
        boxRecentSearch.fadeIn(250);
        boxLogoSearch.css({
            'boxShadow': '0px 0px 18px 11px rgba(0, 0, 0, .1)'
        });

    });
    // click Arrow back
    arrowBacksearch.click(function () {
        logofacebook.show(250);
        iconSerch.show(250);
        inputSerchHeader.css({
            'padding': '0px 0px 0px 40px',
            'transition': 'all .5s'
        }, 1000);
        arrowBacksearch.hide(250);
        boxRecentSearch.fadeOut(250);
        boxLogoSearch.css({
            'boxShadow': 'unset'
        });
    });
});
