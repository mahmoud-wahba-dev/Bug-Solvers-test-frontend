$(document).ready(function () {
  function initializeOwlCarousel() {
    var autoplayValue = $(window).width() >= 1000 ? false : true;
    var owl = $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      rtl: false, // Enable RTL mode
      dots: true,
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

    // Update autoplay on window resize
    $(window).on("resize", function () {
      var newAutoplayValue = $(window).width() >= 1000 ? false : true;
      owl.trigger("destroy.owl.carousel"); // Destroy the carousel
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        items: 1,
        autoplay: newAutoplayValue,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        rtl: false, // Enable RTL mode
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2.1,
          },
          1000: {
            items: 3.4,
          },
        },
      });
    });
  }

  initializeOwlCarousel();
});
