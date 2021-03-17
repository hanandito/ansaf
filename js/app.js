    //  Favor
 $('.carousel-homebanner').addClass('owl-carousel owl-theme').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay:false,
    autoplayTimeout: 5000,
    loop: true,
    responsive:{
     0: {
       items: 1,
       dots: true,
       nav: true
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 1,
       dots: true,
       nav: false
     }
   }
 })