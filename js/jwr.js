$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 600) {
            $('.fixHeader').slideDown(250);
        }
        else {
            $('.fixHeader').slideUp(250);
        }
    });
    if ($(window).width() > 768) {
        $('.fixHeader').hide();
    }
});