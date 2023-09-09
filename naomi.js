
function gridImageSize() {
    $('.about-image').height($('.about-text-container').height())
}

gridImageSize();

window.addEventListener('resize', gridImageSize);