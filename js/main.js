
$(document).ready(function(){
  // Slider area
    $('.slider-active').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

  // testimonial_active
  $('.testimonial_active').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // brand area
  $('.brand-active').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    dots:false,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1
  });


   // Counter area
      $('.counter-active').counterUp({
        delay: 10,
        time: 1000
    });

    
})