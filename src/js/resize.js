window.addEventListener('resize', () => {
    checkHeader();
    activateCustomScroll();
    windowChecker = window.matchMedia('(min-width: 599px)');
})