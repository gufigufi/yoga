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
$('.price__buy').click(function(){
    $('#popUp').addClass('active');
});
$('#closePopUp').click(function () {
    $('#popUp').removeClass('active')
});
$('#popUp').click(function () {
    $(this).removeClass('active')
});
//изменение цвета заголовка цен при наведении на кнопку
$('.price__buy').mouseover(function () {
   $('.price__cost').css("background-color", "#475bf1");
});
$('.price__buy').mouseout(function () {
    $('.price__cost').css("background-color", "#5363db");
});

$('.bloquotes__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.bloquotes__nav'
});
$('.bloquotes__nav').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.bloquotes__for',
    dots: true,
    focusOnSelect: true,
    prevArrow: '<div class="trainer__prew"><img src="../img/icons/arrow.png" alt=""></div>',
    nextArrow: '<div class="trainer__next"><img src="../img/icons/arrow.png" alt=""></div>',
    dotsClass: "my-dots"
});
//плавный скрол
$(document).ready(function(){
    $(".mainHeader").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//прилепающий хедер
$(window).scroll(function() {
    if ($(this).scrollTop() > 706){
        $('.mainHeader').addClass("slide");
        $('.yogaProgram').addClass("slide");
    }  else{
        $('.mainHeader').removeClass("slide");
        $('.yogaProgram').removeClass("slide");
    }
});
/*бургер меню*/
$('.burger__trigger').click(function(){
    $('.burgerMenu').toggleClass('active');
});
$(document).click(function(event) {
    if ($(event.target).closest(".burger__trigger").length ) return;
    $('.burgerMenu').removeClass('active');
    event.stopPropagation();
});