$('.aboutUs__slider').slick({
    infinite: true,
    prevArrow: '<div class="aboutUs__prew"><img src="../img/icons/arrow.png" alt=""></div>',
    nextArrow: '<div class="aboutUs__next"><img src="../img/icons/arrow.png" alt=""></div>'
});

//blocking scroll the main block
document.onwheel = function(e) {
    if (e.target.id != 'popUp') return;
    var area = e.target;
    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (delta < 0 && area.scrollTop == 0) {
        e.preventDefault();
    }
    if (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
        e.preventDefault();
    }
};
$('.prise__buy').click(function(){
    $('#popUp').addClass('active');
});
$('#closePopUp').click(function () {
    $('#popUp').removeClass('active')
});
$('#popUp').click(function () {
    $(this).removeClass('active')
});