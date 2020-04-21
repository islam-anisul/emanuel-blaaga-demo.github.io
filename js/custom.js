$(function () {
    //    -----------PRELOADER PART --------
    $(window).on('load', function () {
        $('#preloader').delay(2000).fadeOut(2000);
    });
    //    ----------PRELOADER PART END--------

    //--------STICKY HEADER PART----------
    $(window).scroll(function () {
        var anis = $(this).scrollTop();
        if (anis > 200) {
            $('.navbar').addClass('header_bg');
        } else {
            $('.navbar').removeClass('header_bg');
        }
    });
    //--------STICKY HEADER PART END----------

    //    --------- BANNER TYPED JS--------
    var typed = new Typed('.typed', {
        strings: ['Emanuel Blaga',
            'a web designer',
            'a web developer',
           ],
        smartBackspace: true,
        stringsElement: null,
        typeSpeed: 50,
        startDelay: 1000,
        backSpeed: 100,
        backDelay: 500,
        loop: true,
        loopCount: 5,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    });
    //    ----------BANNER TYPED JS END--------
    
    //portfolio mixer--------
    var mixer = mixitup('.porifolio_mixer');
    
    //-------clients slide------
    
 $('.clients_slide_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
     speed:1500,
  arrows: false,
  dots:false,
});
    
    //    --------------BACK TO TOP------------
    $(window).scroll(function () {
        var backtop = $(this).scrollTop();
        if (backtop > 500) {
            $('#back_top_button').show();
        } else {
            $('#back_top_button').hide();
        }
    });
    $('#back_top_button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });


});