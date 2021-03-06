$(document).ready(function() {
  
    // Sticky navegation

  $('.js--section-projects').waypoint(function (direction) {
    if(direction === 'down'){
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  }, {
      offset: '60px;'
  });

  // Navegation scroll

  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            // $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

   // Animation on scroll

  // $('.js--wp-1').waypoint(function (direction) {
  //   $('.js--wp-1').addClass('animated bounceInUp');
  // }, {
  //   offset: '60%'
  // });

  // $('.js--wp-2').waypoint(function (direction) {
  //   $('.js--wp-2').addClass('animated fadeIn');
  // }, {
  //   offset: '50%'
  // });

  // $('.js--wp-3').waypoint(function (direction) {
  //   $('.js--wp-3').addClass('animated fadeIn');
  // }, {
  //   offset: '50%'
  // });

  // $('.js--wp-4').waypoint(function (direction) {
  //   $('.js--wp-4').addClass('animated pulse');
  // }, {
  //   offset: '50%'
  // });

  // $('.js--wp-5').waypoint(function (direction) {
  //   $('.js--wp-5').addClass('animated fadeInLeft');
  // }, {
  //   offset: '50%'
  // });
  
  // $('.js--wp-6').waypoint(function (direction) {
  //   $('.js--wp-6').addClass('animated fadeInRight');
  // }, {
  //   offset: '50%'
  // });


});