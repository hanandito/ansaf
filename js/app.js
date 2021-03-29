    //  Favor
 $('.carousel-homebanner').addClass('owl-carousel owl-theme').owlCarousel({
    animateOut: 'fadeOut',
    navText: ["<img src='images/chevron-left-edge-08.png'>","<img src='images/chevron-right-edge-08.png'>"],
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
       nav: true
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
$('.carousel-milestone').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
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
     items: 1,
     dots: false,
     nav: true
   }
 }
})
$('.carousel-gallery').addClass('owl-carousel owl-theme').owlCarousel({
  loop: false,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
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
     dots: false,
     nav: true
   }
 }
})