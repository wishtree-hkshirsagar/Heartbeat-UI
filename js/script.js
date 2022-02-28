/*=====================================
                Preloader
=======================================*/
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});


/*=====================================
            Mobile Navigation
=======================================*/

const navBtn = $("#nav-btn");
const navbar = $("#mobile-navigation");
const navClose = $("#nav-close");

// show nav
navBtn.on("click", () => {
    console.log('inside navbtn');
    navbar.addClass("showNav");
});

// close nav
navClose.on("click", () => {
    console.log('inside closebtn');
    navbar.removeClass("showNav");
});