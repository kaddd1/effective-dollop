$(document).ready(function() {

    let mainButton = $('.main_btna'),
        overlay = $('.overlay'),
        modalWindow = $('.modal'),
        close = $('.close'),
        contactButton = $('.contact');

    close.on('click', function () {
        overlay.fadeOut();
        modalWindow.slideUp();
    });

    function showModal() {
        overlay.fadeIn();
        modalWindow.slideDown();
    }

    contactButton.on('click', showModal);
    mainButton.on('click', showModal);
});