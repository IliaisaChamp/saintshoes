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