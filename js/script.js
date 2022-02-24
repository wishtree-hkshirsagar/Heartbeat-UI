/*=====================================
                Preloader
=======================================*/
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});

var windowsize = $(window).width();
console.log(windowsize);
// if(windowsize < 768)