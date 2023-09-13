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

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

const el1 = document.getElementById('social-main');
const el2 = document.getElementById('social-h1');

console.log(elementsOverlap(el1, el2)); // 👉️ true


if (elementsOverlap(el1, el2)) {
  // el2.style.color="white"; works but changes entire word
}