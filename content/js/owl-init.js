$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Enable loop mode
    margin: 20,
    nav: false, // Enable navigation buttons
    items: 1, // Number of items per slide
    autoplay: true, // Autoplay enabled
    autoplayTimeout: 2000, // Autoplay interval in milliseconds (3 seconds)
    autoplayHoverPause: false, // Autoplay continues even when hovering over carousel
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
