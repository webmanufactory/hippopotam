let carousel = $(".services__galery");
let carouselItem = $(".galery__link");
let carouselImage = $(".galery__image");
let menu = $('.icon');

$(document).ready(function(){
    if (parseInt(window.innerWidth) <= 1024){
        menu.click(function(e){
            e.preventDefault();
            $('.nav__list').slideToggle();
        });
    };

    if (parseInt(window.innerWidth) <= 1440){

        carouselItem.css('margin', '0 15px');
        carouselImage.css('height', 'auto');

        carousel.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                },
                {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    };

    $(".btn").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1000);
    });
    $(".nav__link-1").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
    });
    $(".nav__link-2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });
    $(".nav__link-3").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#elephant").offset().top
        }, 1000);
    });
    $(".nav__link-4").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#blog").offset().top
        }, 1000);
    });
    $(".nav__link-5").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $('#form').trigger('reset');
        $(function() {
          'use strict';
          $('#form').on('submit', function(e) {
            e.preventDefault();
            $.ajax({
              url: 'send.php',
              type: 'POST',
              contentType: false,
              processData: false,
              data: new FormData(this),
              success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                  alert('Спасибо за сообщение! В скором времени мы свяжемся с вами.');
                  $('#form').trigger('reset'); // очистка формы
                } else {
                  alert('Ошибка');
                }
              }
            });
          });
        });
});