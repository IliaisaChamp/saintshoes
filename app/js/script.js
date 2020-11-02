@@include('jquery.js');
@@include('jquery.formstyler.min.js');
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
  $('.catalog-item__favorite').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('catalog-item__favorite--active');
  })
  $('.product-card__favorite').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('product-card__favorite--active');
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

  $('.products-item__basket, .catalog-item__basket').click(function () {
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

  $('.about, .nav, .breadcrumbs, .catalog-about, .catalog__button-dropdown').hover(function () {
    $('.gallery__item-1').toggleClass('gallery__item-1--hover');
    $('.gallery__item-2').toggleClass('gallery__item-2--hover');
    $('.gallery__item-3').toggleClass('gallery__item-3--hover');
    $('.gallery__item-4').toggleClass('gallery__item-4--hover');
    $('.gallery__item-5').toggleClass('gallery__item-5--hover');
    $('.gallery__item-6').toggleClass('gallery__item-6--hover');
    $('.gallery__item-7').toggleClass('gallery__item-7--hover');
    $('.gallery__item-8').toggleClass('gallery__item-8--hover');
    $('.gallery__item-9').toggleClass('gallery__item-9--hover');
    $('.sneakers-gallery__item-1').toggleClass('sneakers-gallery__item-1--hover');
    $('.sneakers-gallery__item-2').toggleClass('sneakers-gallery__item-2--hover');
    $('.sneakers-gallery__item-3').toggleClass('sneakers-gallery__item-3--hover');
    $('.sneakers-gallery__item-4').toggleClass('sneakers-gallery__item-4--hover');
    $('.sneakers-gallery__item-5').toggleClass('sneakers-gallery__item-5--hover');
    $('.sneakers-gallery__item-6').toggleClass('sneakers-gallery__item-6--hover');
    $('.sneakers-gallery__item-7').toggleClass('sneakers-gallery__item-7--hover');

  });


  $('.catalog-filters__list-dropdown').on('click', function (event) {
    event.preventDefault();
    $('.catalog-filters__list-dropdown').toggleClass('catalog-filters__list-dropdown--visible');
  })

  // $('input, select').styler();


  $('.aside-slider').slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="aside-slider__btn aside-slider__btn-top"><img src="./img/arrow-left.svg" alt="Icon: arrow left"></button>',
    nextArrow: '<button class="aside-slider__btn aside-slider__btn-down"><img src="./img/arrow-right.svg" alt="Icon: arrow right"></button>',
  });


  $('.product-card__size-item').on('click', function () {
    $(this).toggleClass('product-card__size-item--active');
  });

  $('.product-card__tabs-item').on('click', function (event) {
    event.preventDefault();

    $('.product-card__tabs-item').removeClass('product-card__tabs-item--active');
    $('.product-card__content-item').removeClass('product-card__content-item--active');
    
    
    $(this).addClass('product-card__tabs-item--active');
    $($(this).attr('href')).addClass('product-card__content-item--active');
    
  });






});


// let items;

// window.addEventListener('load', () => {
//   items = document.getElementsByClassName('catalog-filters__list-dropdown');
//   for( let item of items ) {
//       item.addEventListener('click', () => {
//           for( let it of items ) 
//           it.classList.remove('catalog-filters__list-dropdown--visible');
//           item.classList.add('catalog-filters__list-dropdown--visible')
//       });
//   }

// });

// Добавления количество товаров

$('.product-card__vol-min').click(function () {
  var total = $('.product-card__vol-total');
  var count = parseInt(total.val()) - 1;
  count = count < 1 ? 1 : count;
  total.val(count);
  total.change();
  return false;
});
$('.product-card__vol-pls').click(function () {
  var total = $('.product-card__vol-total');
  total.val(parseInt(total.val()) + 1);
  total.change();
  return false;
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