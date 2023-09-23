(function ($) {
  "use strict";

  // preloader
  $(window).on('load', function () {
    // Hide the preloader when the page is fully loaded
    $('.preloader').fadeOut('slow');
  });


  // script.js
  // script.js
  document.addEventListener("DOMContentLoaded", function () {
    // Check the user's preference for dark mode and apply it if set
    const body = document.body;
    const switchTheme = document.querySelector(".switch__theme");
    const sunIcon = switchTheme.querySelector(".fa-regular.fa-sun");
    const moonIcon = switchTheme.querySelector(".fa-solid.fa-moon");

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      sunIcon.style.display = "none"; // Hide the sun icon in dark mode
      moonIcon.style.display = "block"; // Show the moon icon in dark mode
    }

    // Add a click event listener to the theme switcher
    switchTheme.addEventListener("click", function () {
      // Toggle dark mode
      body.classList.toggle("dark-mode");

      // Toggle the display of the sun and moon icons
      sunIcon.style.display = body.classList.contains("dark-mode") ? "none" : "block";
      moonIcon.style.display = body.classList.contains("dark-mode") ? "block" : "none";

      // Save the user's preference in local storage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });


  //banner
  $('.banner__active').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true, // Add this line to enable the fade animation
  });

  //marquee
  const marquee = document.querySelector('.marquee');

  marquee.addEventListener('mouseenter', () => {
    marquee.stop();
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.start();
  });


  //banner
  $('.review__active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    ]
  });

  //games__active
  $('.games__active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    ]
  });

  //result__slider__active
  $('.result__slider__active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 1000ms = 1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable the fade effect
    cssEase: 'linear' // Optional: Set the CSS easing for the fade effect
  });

  // bottom to top
  $(document).ready(function () {
    $('.bottom__to__top').slick({
      vertical: true, // Enable vertical slider
      slidesToShow: 5, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      infinite: true, // Loop the slider
      autoplay: true, // Auto-play the slider
      autoplaySpeed: 0, // Time between slides in milliseconds
      dots: false,
      arrows: false,
      cssEase: "linear",
      pauseOnHover: true,
      speed: 1000,
    });
  });



})(jQuery);