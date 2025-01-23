(function ($) {
  "use strict";

  // NAVBAR
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // Add styles for slideshow, dots, and arrows
  const styles = `
    .vegas-prev, .vegas-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      width: 50px;
      height: 50px;
      border: none;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .vegas-prev { left: 20px; }
    .vegas-next { right: 20px; }
    .vegas-prev:hover, .vegas-next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Styles for dots inside video */
    .vegas-dots {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 1000;
      padding: 0;
      margin: 0;
    }
    .vegas-dots span {
      width: 12px;
      height: 12px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .vegas-dots span.active {
      background-color: rgba(255, 255, 255, 1);
    }

    /* Responsive styles for mobile */
    @media (max-width: 768px) {
      .vegas-prev, .vegas-next {
        display: none; /* Hide arrows on mobile */
      }
      .vegas-dots {
        bottom: 20px; /* Place dots just below center */
        gap: 8px;
      }
      .vegas-dots span {
        width: 10px;
        height: 10px; /* Smaller dots for mobile */
      }
    }
  `;
  $('head').append(`<style>${styles}</style>`);

  // Add buttons for larger screens
  if ($(window).width() > 768) {
    $('body').append('<button class="vegas-prev">&#9664;</button>');
    $('body').append('<button class="vegas-next">&#9654;</button>');
  }

  // Add dots container to DOM
  $('body').append('<div class="vegas-dots"></div>');

  $(function () {
    const slides = [
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.34.18 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.34.13 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.34.20 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.47.24 PM (1).mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.47.26 PM (1).mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.56.54 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.57.17 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
      { 
        src: '', 
        video: {
          src: ['videos/WhatsApp Video 2025-01-21 at 4.57.18 PM.mp4'], // Video file
          loop: false,
          mute: true
        }
      },
    ];

    // Initialize Vegas slideshow
    $('.hero-slides').vegas({
      slides: slides,
      timer: false, // No progress bar
      animation: 'kenburns',
      delay: 3000, // Delay between slides
      walk: function (index) {
        // Update active dot on slide change
        $('.vegas-dots span').removeClass('active');
        $('.vegas-dots span').eq(index).addClass('active');
      },
      swipe: true, // Enable swipe functionality for mobile
    });

    // Add dots dynamically based on the number of slides
    slides.forEach((_, index) => {
      $('.vegas-dots').append(`<span data-index="${index}"></span>`);
    });

    // Set the first dot as active
    $('.vegas-dots span').first().addClass('active');

    // Dot click functionality
    $('.vegas-dots span').on('click', function () {
      const slideIndex = $(this).data('index');
      $('.hero-slides').vegas('jump', slideIndex);
    });

    // Add functionality for next/previous buttons (desktop only)
    if ($(window).width() > 768) {
      $('.vegas-prev').on('click', function () {
        $('.hero-slides').vegas('previous');
      });

      $('.vegas-next').on('click', function () {
        $('.hero-slides').vegas('next');
      });
    }
  });

  // Smooth scroll functionality for links
  $('.smoothscroll').click(function () {
    const el = $(this).attr('href');
    const elWrapped = $(el);
    const headerHeight = $('.navbar').height() + 60;

    scrollToDiv(elWrapped, headerHeight);
    return false;

    function scrollToDiv(element, navHeight) {
      const offset = element.offset();
      const offsetTop = offset.top;
      const totalScroll = offsetTop - navHeight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });
})(window.jQuery);
