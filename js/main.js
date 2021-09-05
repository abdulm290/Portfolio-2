/*
*
* ---------------------------------------------------------------------------
*
* Template: http://demo.iamhafiz.me/letigation/
* Author: wpthemeshaper
* Author URI: wpthemeshaperwd
* Version:     1.0
*
* ---------------------------------------------------------------------------
*
*/

(function ($) {

'use strict';

/*  ======================================
    Mobile Menu
    ======================================*/
    
    var mobileMenu = $('.main-navigation ul.menu');
    mobileMenu.slicknav({
        prependTo: '.mobile-menu'
    });

    //Update Scroll to Top
    // function headerStyle() {
    //     if($('.header-logo-menu-area').length){
    //         var windowpos = $(window).scrollTop();
    //         if (windowpos >= 200) {
    //             $('.header-logo-menu-area').addClass('fixed-header');
    //             $('.scroll-to-top').fadeIn(300);
    //         } else {
    //             $('.header-logo-menu-area').removeClass('fixed-header');
    //             $('.scroll-to-top').fadeOut(300);
    //         }
    //     }
    // }
    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.site-header .navigation').length) {
        cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;
    }


/*  ======================================
    Banner Slide
    ====================================== */

    var mainBannerArea = $('.banner-area');

    mainBannerArea.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i><div class="itemprebg"></div>', '<div class="itemnextbg"></div><i class="fa fa-angle-right" aria-hidden="true"></i>'],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 6000 // auto play time
    });

    var itemBg = $('.itembg');

    $('.banner-area .single-banner').each(function () {
        var itmeImg = $(this).find('.itembg img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumb() {

        $('.banner-area .owl-item').removeClass('next prev');

        var currenSlide = $('.banner-area .owl-item.active');
        currenSlide.next('.owl-item').addClass('next');
        currenSlide.prev('.owl-item').addClass('prev');

        var nextSlideImg = $('.owl-item.next').find('.itembg img').attr('src');
        var prevSlideImg = $('.owl-item.prev').find('.itembg img').attr('src');

        $('.banner-area .owl-nav .owl-prev .itemprebg').css({
            background: 'url(' + prevSlideImg + ')'
        });

        $('.banner-area .owl-nav .owl-next .itemnextbg').css({
            background: 'url(' + nextSlideImg + ')'
        });

    }

    slideThumb();

    mainBannerArea.on('translate.owl.carousel', function () {
        $('.single-banner h1 span, .single-banner h1, .single-banner a').removeClass('slideInUp animated').hide();
    });

    mainBannerArea.on('translated.owl.carousel', function () {
        slideThumb();
        $('.owl-item.active .single-banner h1 span, .owl-item.active .single-banner h1, .owl-item.active .single-banner a').addClass('slideInUp animated').show();
    });

/*  ======================================
    Banner Slide Two
    ====================================== */

    var mainBannerAreaTwo = $('.banner-area-two');

    mainBannerAreaTwo.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i><div class="itemprebg"></div>', '<div class="itemnextbg"></div><i class="fa fa-angle-right" aria-hidden="true"></i>'],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 6000 // auto play time
    });

    var itemBg = $('.itembgtwo');

    $('.banner-area-two .single-banner').each(function () {
        var itmeImg = $(this).find('.itembgtwo img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumbTwo() {

        $('.banner-area-two .owl-item').removeClass('next prev');

        var currenSlide = $('.banner-area-two .owl-item.active');
        currenSlide.next('.owl-item').addClass('next');
        currenSlide.prev('.owl-item').addClass('prev');

        var nextSlideImg = $('.owl-item.next').find('.itembgtwo img').attr('src');
        var prevSlideImg = $('.owl-item.prev').find('.itembgtwo img').attr('src');

        $('.banner-area-two .owl-nav .owl-prev .itemprebg').css({
            background: 'url(' + prevSlideImg + ')'
        });

        $('.banner-area-two .owl-nav .owl-next .itemnextbg').css({
            background: 'url(' + nextSlideImg + ')'
        });

    }

    slideThumbTwo()

    mainBannerAreaTwo.on('translate.owl.carousel', function () {
        $('.single-banner h1 span, .single-banner h1, .single-banner a').removeClass('slideInUp animated').hide();
    });

    mainBannerAreaTwo.on('translated.owl.carousel', function () {
        slideThumbTwo()
        $('.owl-item.active .single-banner h1 span, .owl-item.active .single-banner h1, .owl-item.active .single-banner a').addClass('slideInUp animated').show();
    });

/*  ======================================
    Attorney Carousel
    ====================================== */

    var attorneyCarousel = $('.attorney-carousel');
    
    attorneyCarousel.owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 6000 // auto play time
    });

/*  ======================================
    Counter
    ====================================== */

    var counter = $('.counter');
    counter.counterUp({
        delay: 10,
        time: 1000
    });

/*  ======================================
    Progress bar
    ====================================== */
    var $progress = $('.barfiller');

	$progress.waypoint(function () {

		/*** Progress Bar ***/
		var skillOne = $('#bar1');
		var skillTwo = $('#bar2');
		var skillThree = $('#bar3');
		var skillFour = $('#bar4');

		skillOne.barfiller({
			barColor: '#f7a349',
		});
		skillTwo.barfiller({
			barColor: '#f7a349',
		});
		skillThree.barfiller({
			barColor: '#f7a349',
		});
		skillFour.barfiller({
			barColor: '#f7a349',
		});

		this.destroy();

	}, {
		offset: '80%'
	});

/*  ======================================
    Contact us map
    ====================================== */

    if ($('#contact-map').length > 0){

        var myCenter = new google.maps.LatLng(40.7128, -74.0059);

        function initialize() {
            var mapProp = {
                zoom: 12,
                center: myCenter,
                disableDefaultUI: true,
                scrollwheel: false,
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("contact-map"), mapProp);
            // Marker js
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng(40.7128, -74.0059),
                map : map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

    }

/*  ======================================
    History carousel
    ====================================== */

    var historycaro = $('.history-carousel');

    historycaro.owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbImage: false,
        dots: false,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });

/*  ======================================
    Banner Slide
    ====================================== */

    var gallerywidget = $('.img-gallery-widget');

    gallerywidget.owlCarousel({
        items: 1,
        loop: true,
        thumbs: false,
        autoplay: true,
        autoplayTimeout: 6000 // auto play time
    });

/*  ======================================
    Popup video
    ====================================== */
    
    var videBg = $('.video-btn');
    videBg.YouTubePopUp({
        autoplay: 1
    });

    $(window).on('load', function () {

        /*  ======================================
            Preloader
            ====================================== */

        /*  ======================================
            Portfolio
            ====================================== */

        $('.portfolio-menu button').on('click', function () {
            $('.portfolio-menu button').removeClass('active-portfolio');
            $(this).addClass('active-portfolio');
        });

        var $container = $('.portfolio-container');
        $container.isotope({
            itemSelector: '.portfolio-container .single-portfolio'
        });

        // MASONRY

        var $container = $('.portfolio-container-masonry');
        $container.isotope({
            itemSelector: '.portfolio-container-masonry .single-portfolio-width-two',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });

        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
            return false;
        });


        /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.site-header .header-logo-menu-area').length) {
        cloneNavForSticyMenu($('.site-header .header-logo-menu-area'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.site-header .header-logo-menu-area');

        if ($(window).scrollTop() > 800) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;
    }


    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='fa fa-angle-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


        /* ==========================================================================
           When document is Scrollig, do
           ========================================================================== */
            
             $(window).on("scroll", function() {

                if ($(".site-header").length) {
                    stickyMenu( $('.site-header .header-logo-menu-area'), "sticky-on" );
                }

                toggleBackToTopBtn();

            });

        // imagesLoaded

        //var masonryLoaded = $('.portfolio-container-masonry');
        //masonryLoaded.imagesLoaded(function () {
            // images have loaded
        //});

    });

}(jQuery));
