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

        const $map = $('.location');
        const map = new google.maps.Map(
            $map[0],
            {
                center: {lat: 40.659, lng: -73.903},
                zoom: 14,
                styles: [
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            }
        );

        const image = {
            url: '../img/marker.png',
            scaledSize: new google.maps.Size(64, 64)
        };

        const marker = new google.maps.Marker({
            position: {lat: 40.681, lng: -73.918},
            map: map,
            title: '91 Nolan Extensions Suite 670',
            icon: image
        });


    });
})(jQuery);