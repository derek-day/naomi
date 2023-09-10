function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
    
if (!isMobile()) {
    //place script you don't want to run on mobile here
    $('.about-image').height($('.about-text-container').height())
    window.addEventListener('resize', gridImageSize);
    gridImageSize();
}

// function gridImageSize() {
//     $('.about-image').height($('.about-text-container').height())
// }

// window.addEventListener('resize', gridImageSize);

// gridImageSize();