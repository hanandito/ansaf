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
 $('.carousel-ourbusiness').addClass('owl-carousel owl-theme').owlCarousel({
  stagePadding: 40,
  loop:false,
  margin: 17,
  navText: ["<img src='images/chevron-left-square-08.png'>","<img src='images/chevron-right-square-08.png'>"],
  items:2,
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
     items: 2,
     dots: false,
     nav: true
   }
 }
})