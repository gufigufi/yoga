$('.aboutUs__slider').slick({
    infinite: true,
    prevArrow: '<div class="aboutUs__prew"><img src="img/icons/arrow.png" alt=""></div>',
    nextArrow: '<div class="aboutUs__next"><img src="img/icons/arrow.png" alt=""></div>'
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

$('.price:has(.price__buy)')
    .mouseover(function () {
        $(this).addClass('active');
})
    .mouseout(function () {
        $(this).removeClass('active');
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
    prevArrow: '<div class="trainer__prew"><img src="img/icons/arrow.png" alt=""></div>',
    nextArrow: '<div class="trainer__next"><img src="img/icons/arrow.png" alt=""></div>',
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
        top = $(id).offset().top - 80;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5hYm91dFVzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJhYm91dFVzX19wcmV3XCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3cucG5nXCIgYWx0PVwiXCI+PC9kaXY+JyxcclxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJhYm91dFVzX19uZXh0XCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3cucG5nXCIgYWx0PVwiXCI+PC9kaXY+J1xyXG59KTtcclxuXHJcbi8vYmxvY2tpbmcgc2Nyb2xsIHRoZSBtYWluIGJsb2NrXHJcbmRvY3VtZW50Lm9ud2hlZWwgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgIT0gJ3BvcFVwJykgcmV0dXJuO1xyXG4gICAgdmFyIGFyZWEgPSBlLnRhcmdldDtcclxuICAgIHZhciBkZWx0YSA9IGUuZGVsdGFZIHx8IGUuZGV0YWlsIHx8IGUud2hlZWxEZWx0YTtcclxuICAgIGlmIChkZWx0YSA8IDAgJiYgYXJlYS5zY3JvbGxUb3AgPT0gMCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGlmIChkZWx0YSA+IDAgJiYgYXJlYS5zY3JvbGxIZWlnaHQgLSBhcmVhLmNsaWVudEhlaWdodCAtIGFyZWEuc2Nyb2xsVG9wIDw9IDEpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn07XHJcbiQoJy5wcmljZV9fYnV5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJyNwb3BVcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcbiQoJyNjbG9zZVBvcFVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3BvcFVwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbn0pO1xyXG4kKCcjcG9wVXAnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG59KTtcclxuLy/QuNC30LzQtdC90LXQvdC40LUg0YbQstC10YLQsCDQt9Cw0LPQvtC70L7QstC60LAg0YbQtdC9INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0L3QsCDQutC90L7Qv9C60YNcclxuXHJcbiQoJy5wcmljZTpoYXMoLnByaWNlX19idXkpJylcclxuICAgIC5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KVxyXG4gICAgLm1vdXNlb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKCcuYmxvcXVvdGVzX19mb3InKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgYXNOYXZGb3I6ICcuYmxvcXVvdGVzX19uYXYnXHJcbn0pO1xyXG4kKCcuYmxvcXVvdGVzX19uYXYnKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXNOYXZGb3I6ICcuYmxvcXVvdGVzX19mb3InLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwidHJhaW5lcl9fcHJld1wiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LnBuZ1wiIGFsdD1cIlwiPjwvZGl2PicsXHJcbiAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwidHJhaW5lcl9fbmV4dFwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LnBuZ1wiIGFsdD1cIlwiPjwvZGl2PicsXHJcbiAgICBkb3RzQ2xhc3M6IFwibXktZG90c1wiXHJcbn0pO1xyXG4vL9C/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoXCIubWFpbkhlYWRlclwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcCAtIDgwO1xyXG4gICAgICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vL9C/0YDQuNC70LXQv9Cw0Y7RidC40Lkg0YXQtdC00LXRgFxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA3MDYpe1xyXG4gICAgICAgICQoJy5tYWluSGVhZGVyJykuYWRkQ2xhc3MoXCJzbGlkZVwiKTtcclxuICAgICAgICAkKCcueW9nYVByb2dyYW0nKS5hZGRDbGFzcyhcInNsaWRlXCIpO1xyXG4gICAgfSAgZWxzZXtcclxuICAgICAgICAkKCcubWFpbkhlYWRlcicpLnJlbW92ZUNsYXNzKFwic2xpZGVcIik7XHJcbiAgICAgICAgJCgnLnlvZ2FQcm9ncmFtJykucmVtb3ZlQ2xhc3MoXCJzbGlkZVwiKTtcclxuICAgIH1cclxufSk7XHJcbi8q0LHRg9GA0LPQtdGAINC80LXQvdGOKi9cclxuJCgnLmJ1cmdlcl9fdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuYnVyZ2VyTWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIuYnVyZ2VyX190cmlnZ2VyXCIpLmxlbmd0aCApIHJldHVybjtcclxuICAgICQoJy5idXJnZXJNZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
