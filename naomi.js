
function gridImageSize() {
    $('.about-image').height($('.about-text-container').height())
}

window.addEventListener('resize', gridImageSize);

gridImageSize();