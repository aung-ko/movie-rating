$(function () {
  //'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });
});

$(function() {
    $('.lazy').lazy();
});

$(function(){
    var min_slider = document.getElementById("min_rating");
    var output = document.getElementById("min_rateoutput");
    var max_slider = document.getElementById("max_rating");
    var output = document.getElementById("max_rateoutput");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value+' Star';
    }

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
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});


$(document).ready(function(){
    $('#min_rating').barrating({
      theme: 'fontawesome-stars'
    });
    $('#max_rating').barrating({
      theme: 'fontawesome-stars'
    });
    $('#rating').barrating({
      theme: 'fontawesome-stars'
    });       
});



