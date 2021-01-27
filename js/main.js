$(document).ready(function(){
  $('.cases-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    customPaging : function(slider) {
        return '<input type="radio" name="sl" class="slider-radio">';
      },
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  });

  $('.slider-radio:first').prop("checked", true);
});