$(function() {
    $('.lazy').lazy();
});

$(document).ready(function(){
  $('.card-list').slick({
    accessibility: true,
    centerMode: true,
    autoplay: false,
    centerPadding: '200px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '250px',
          slidesToShow: 1
        }
      },
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