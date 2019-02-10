(function ($) {
    $(document).ready(function () {
        $('.news__slider').slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000
        });

        $(".fancybox").fancybox();
    });
})(jQuery);