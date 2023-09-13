function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function gridImageSize() {
    $('.library-image').height($('.library-text-container').height()+125+"px")
    $('.about-image-container').height($('.about-text-container').height())

    $(".library-text-header").width($(".library-p").width())
    $(".library-button").width($(".library-p").width())

    $(".social-leaf").width($(".social-main").width())
}
    
if (!isMobile()) {
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