@@include('jquery.js');


$(document).ready(function(){
  
  $(".search__input").click(function(){
    $(".search").toggleClass("search--active");
    $(".search__input").toggleClass("search__input--active");
    $(".search__img").toggleClass("search__img--active");
  });

  $('.nav-btn').on('click', function(){
    $('.menu').addClass('menu--active');
    $('.nav__inner').addClass('nav__inner--hidden'); 
    $('.about__info').addClass('about__info--hidden'); 
   });
 
   $('.close-btn').on('click', function(){
     $('.menu').removeClass('menu--active');
     $('.nav__inner').removeClass('nav__inner--hidden');
     $('.about__info').removeClass('about__info--hidden');
   })
  
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
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
  // определения поддержки WebP 