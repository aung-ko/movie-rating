$(function () {
  //'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });
});

$(function() {
    $('.lazy').lazy();
});

$(document).ready(function(){
  $(".left-first-section").click(function(){
        $('.main-section').toggleClass("open-more");
    });
});
$(document).ready(function(){
  $(".fa-minus").click(function(){
        $('.main-section').toggleClass("open-more");
    });
});
$(document).ready(function(){
  $(".fa-times").click(function(){
        $('.main-section').toggleClass("open-more");
    });
});

$(document).ready(function(){
  $('.card-list').slick({
    accessibility: true,
    centerMode: true,
    autoplay: false,
    centerPadding: '50px',
    slidesToShow: 2,
    responsive: [
      // {
      //   breakpoint: 1281,
      //   settings: {
      //     arrows: true,
      //     centerMode: true,
      //     centerPadding: '250px',
      //     slidesToShow: 1
      //   }
      // },
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },    
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      },    
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  // Bind event listener
});



!function(a){"use strict";a.fn.ratingThemes["krajee-fa"]={filledStar:'<i class="fa fa-star"></i>',emptyStar:'<i class="fa fa-star-o"></i>',clearButton:'<i class="fa fa-lg fa-minus-circle"></i>'}}(window.jQuery);

$(document).ready(function(){
    $('.star-readonly').rating({
        hoverOnClear: false,
        theme: 'krajee-fa',
        displayed: false,
        showClear: false,        
        showCaption: false        
    });
    $('.star-reaction').rating({
        hoverOnClear: false,
        theme: 'krajee-fa',
        displayed: true,
        showClear: true,        
        showCaption: false        
    });
    $('.user-reaction').rating({
        hoverOnClear: true,
        theme: 'krajee-fa',
        displayed: true,
        showClear: true,        
        showCaption: true        
    });           
});





