$(function(){

    // slick slider banner ============
    $('.handbags_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        });

    // venobox ========================
    $('.venobox').venobox();

    // counter us js ==================
    $('.counter').counterUp({
    delay: 50,
    time: 2000
    });

    

})