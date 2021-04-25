$(document).ready(function(){
  $('.cases-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    customPaging : function(slider) {
        return '<input type="radio" name="sl" class="slider-radio cases-slider-radio">';
      },
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  });

  $('.cases-slider-radio:first').prop("checked", true);
});

$(document).ready(function(){
  $('.reviews-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    customPaging : function(slider) {
        return '<input type="radio" name="sl" class="slider-radio reviews-slider-radio">';
      },
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });

  $('.reviews-slider-radio:first').prop("checked", true);
});s