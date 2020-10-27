@@include('jquery.js');
@@include('slick.js');


$(document).ready(function () {

  $(".search__input").click(function () {
    $(".search").toggleClass("search--active");
    $(".search__input").toggleClass("search__input--active");
    $(".search__img").toggleClass("search__img--active");
  });

  $('.nav-btn').on('click', function () {
    $('.menu').addClass('menu--active');
    $('.nav__inner').addClass('nav__inner--hidden');
    $('.about__info').addClass('about__info--hidden');
  });

  $('.close-btn').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.nav__inner').removeClass('nav__inner--hidden');
    $('.about__info').removeClass('about__info--hidden');
  })

  $('.products-item__favorite').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('products-item__favorite--active');
  })

  // СЛАЙДЕР
  $('.products-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="products-slider__btn products-slider__btn-left"><img src="./img/arrow-left.svg" alt="Icon: arrow left"></button>',
    nextArrow: '<button class="products-slider__btn products-slider__btn-right"><img src="./img/arrow-right.svg" alt="Icon: arrow right"></button>',
  });

  $('.banner-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
  });

  $('.products-item__basket').click(function () {
    if ($('.user-list__basket--full').css("display", "none"))
      $('.user-list__basket--full').css("display", "block");
    else
      $('.user-list__basket--full').css("display", "none");
  });

  // ВЫПАДАЮЩЕЕ МЕНЮ
  $('.menu__item--hover').click(function (event) {
    $('.menu-dropdown').toggleClass('menu-dropdown--active');
    if ($('.menu-dropdown').hasClass(!'menu-dropdown--active'))
      event.preventDefault();
    else
      !event.preventDefault();
  });

  $('.about, .nav, .breadcrumbs').hover(function () {
    $('.gallery__item-1').toggleClass('gallery__item-1--hover');
    $('.gallery__item-2').toggleClass('gallery__item-2--hover');
    $('.gallery__item-3').toggleClass('gallery__item-3--hover');
    $('.gallery__item-4').toggleClass('gallery__item-4--hover');
    $('.gallery__item-5').toggleClass('gallery__item-5--hover');
    $('.gallery__item-6').toggleClass('gallery__item-6--hover');
    $('.gallery__item-7').toggleClass('gallery__item-7--hover');
    $('.gallery__item-8').toggleClass('gallery__item-8--hover');
    $('.gallery__item-9').toggleClass('gallery__item-9--hover');
  });
});




















// определения поддержки WebP 
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
// определения поддержки WebP 