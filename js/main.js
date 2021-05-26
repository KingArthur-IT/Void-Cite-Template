$(document).ready(function () {
  $('.cases-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    customPaging: function (slider) {
      return '<input type="radio" name="cases-radio" class="cases-slider-radio">';
    },
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
      },
      {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
      }
    ]
  });

  $('li.slick-active').has('input.cases-slider-radio').children().prop("checked", true);
  $(".cases-slider").on("beforeChange", function (){
    $('li.slick-active').has('input.cases-slider-radio').children().prop("checked", true);
  })
  


  $('.reviews-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    customPaging: function (slider) {
      return '<input type="radio" name="reviews-radio" class="reviews-slider-radio">';
    },
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#prev-review'),
    nextArrow: $('#next-review')
  });

  $('li.slick-active').has('input.reviews-slider-radio').children().prop("checked", true);
  $(".reviews-slider").on("beforeChange", function (){
    $('li.slick-active').has('input.reviews-slider-radio').children().prop("checked", true);
  })

  $( window ).resize(function() {
      if (window.innerWidth < 641) {
      $('.clients__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        customPaging: function (slider) {
          return '<input type="radio" name="clients-radio" class="clients-slider-radio">';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      });
    }
  });
  if (window.innerWidth < 641) {
    $('.clients__wrapper').slick({
      dots: true,
      infinite: true,
      speed: 300,
      adaptiveHeight: true,
      customPaging: function (slider) {
        return '<input type="radio" name="clients-radio" class="clients-slider-radio">';
      },
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });
  }
  $('li.slick-active').has('input.clients-slider-radio').children().prop("checked", true);
  $(".clients__wrapper").on("beforeChange", function (){
    $('li.slick-active').has('input.clients-slider-radio').children().prop("checked", true);
  })

  function demoLockup() {
    Swal.fire({
        icon: 'info',
        title: 'Это демо-версия сайта',
        text: 'Этот сайт лишь "лицевая" часть некоторого проекта, поэтому в нем ограничены некоторые функции.'
    })
    }

  $('.lock').on('click', function () {
          demoLockup();
      });
});