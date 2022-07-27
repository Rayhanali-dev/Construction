$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.sponser-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.arrows-left',
        nextArrow: '.arrows-right',
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.engineer-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '.arrows-left',
        nextArrow: '.arrows-right',
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $(function(){
        $(window).scroll(function(){
            $(window).scrollTop()
            if($(window).scrollTop() > 300) {
                $('.navbar').addClass('sticky-menu')
            }
            else {
                $('.navbar').removeClass('sticky-menu')
            }
        })
    })

})


var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})


var html_body = $('html, body');
$('#mobile-menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})


 let mobile_menu = document.getElementById("mobile-menu")
 let bars = document.querySelector(".bars")
 let line_one = document.querySelector('.line-one')
 let line_two = document.querySelector('.line-two')
 let line_three = document.querySelector('.line-three')

 bars.addEventListener("click", function(){
    mobile_menu.classList.toggle('slide-menu')
 })

 bars.addEventListener("click", function(){
    line_one.classList.toggle('baka-1')
    line_two.classList.toggle('baka-2')
    line_three.classList.toggle('baka-3')
 })