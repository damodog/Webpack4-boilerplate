import $ from 'jquery'; // might move jquery, or remove it if we go for vanilla js
window.jQuery = $; window.$ = $;

/* Declaring our variables */
const hamburger_activated = 'hamburger-menu_activated';
const html = $('html');
const header_menu = $('.js-header-menu');
const document = $(document);

/*******************************************
 * Functions
*******************************************/

/**
 * @description close hamburger menu
 */
function hideHamburgerMenu() {
    html.removeClass(hamburger_activated);
    document.trigger('hamburgerMenu.closed');
    // TO DO: set .attr('aria-expanded', 'false') on link and .attr('aria-hidden', 'true') on content
}

/**
 * @description show hamburger menu
*/
function showHamburgerMenu() {
    html.addClass(hamburger_activated);
    document.trigger('hamburgerMenu.opened');
    // TO DO: set .attr('aria-expanded', 'true') on link and .attr('aria-hidden', 'false') on content
}

/**
 * @description add outline for keyboard users
*/
function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        html.addClass('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

/*******************************************
 * Click handlers
*******************************************/

/**
 * @description hamburger menu toggle
*/
$('.js-header-menu, .js-sidenav-close, .hamburger-menu_activated .site-wrapper').on( "click", function() {
    if(html.hasClass(hamburger_activated)) {
        hideHamburgerMenu();
        return;
    }
    showHamburgerMenu();
});

/**
 * @description adds outline on elements for keyboard users
*/
window.addEventListener('keydown', handleFirstTab);