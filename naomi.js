function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function gridImageSize() {
    // $('.about-image').height($('.about-text-container').height())
    $('.library-image').height($('.library-text-container').height()+150+"px")
    $('.about-image-container').height($('.about-text-container').height())
    // $('.library-image-container').height($('.library-text-container').height()+100+"px")


    // var libraryWidth = $('.library-image').width()

    // var libraryColumn = "1fr " + libraryWidth + "px"

    // document.getElementById("library").style.gridTemplateColumns = libraryColumn
}
    
if (!isMobile()) {
// if ($(window).width() > 1000) {
    // console.log($(window).width());
    //place script you don't want to run on mobile here
    window.addEventListener('resize', gridImageSize);
    gridImageSize();
}

var nav = $("#nav");

$(window).on('scroll', function() {
  "use strict";
  if ($(window).scrollTop() >= 10) {
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
});