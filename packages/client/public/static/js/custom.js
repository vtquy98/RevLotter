/* eslint-disable no-undef */
// Custom Scripts for Array Template //

 $(function($) {
  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
  var mainbottom = $('#main').offset().top;

  // on scroll,
  $(window).on('scroll', function() {
    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar').addClass('past-main');
      $('.navbar').addClass('effect-main');
    } else {
      $('.navbar').removeClass('past-main');
    }
  });

  // Collapse navbar on click

  $(document).on('click.nav', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
      $(this)
        .removeClass('in')
        .addClass('collapse');
    }
  });

  /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 1000) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function() {
    $('#back-top').tooltip('hide');
    $('body,html').animate(
      {
        scrollTop: 0
      },
      1500
    );
    return false;
  });


  /* ------ jQuery for Easing min -- */
  (function($) {
    // Start of use strict

   

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });
  })(jQuery); // End of use strict

  /* --------- Wow Init ------ */

  new WOW().init();

 

  /*----- Preloader ----- */

  $(window).on('load', function () {
    /*-------- Owl Carousel ---------- */
    $('.review-cards').owlCarousel({
      slideSpeed: 300,
      items: 1,
      loop: true,
      singleItem: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      pagination: false,
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    setTimeout(function() {
      $('#loading').fadeOut('slow', function() {});
    }, 3000);
     // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
      if (
        // eslint-disable-next-line no-restricted-globals
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        // eslint-disable-next-line no-restricted-globals
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 54
            },
            1000,
            'easeInOutExpo'
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });

    /* ----- Counter Up ----- */
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
  });

  /*----- Subscription Form ----- */

  $(document).ready(function () {
    
        
    // jQuery Validation
    $('#chimp-form').validate({
      // if valid, post data via AJAX
      submitHandler: function() {
        $.post(
          'assets/php/subscribe.php',
          { email: $('#chimp-email').val() },
          function(data) {
            $('#response').html(data);
          }
        );
      },
      // all fields are required
      rules: {
        email: {
          required: true,
          email: true
        }
      }
    });
  });
});
