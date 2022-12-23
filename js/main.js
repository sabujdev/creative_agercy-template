
$(document).ready(function(){


// mean menu 
$('nav#mobile_menu_active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile_menu',
});


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
    autoplaySpeed:2000,
    dots:false,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  //blogs
  $('.blog-active').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


   // Counter area
      $('.counter-active').counterUp({
        delay: 10,
        time: 1000
    });

    
})