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
    arrows: false
  });

  $('.cases-slider-radio:first').prop("checked", true);

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

  $('.reviews-slider-radio:first').prop("checked", true);
});
