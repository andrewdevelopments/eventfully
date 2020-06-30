(function($) {
	'use strict';

	var
	ww = $(window).width(),
	wh = $(window).height(),
	heroImage = $('.hero'),
	mapWrapper = $('.map'),

	init = function() {
		heroHeight();
		clock();
		GoogleMap();
	},
	heroHeight = function() {
		heroImage.height(wh);
	},
	clock = function() {
		var counter = $('.countdown');

		if( counter.length ) {

			// Remove this on sale
			var now = new Date();
			var targetDate = now.setDate(now.getDate() + 89) - 32810000;
			////////////////////////////////////////////////////////////

			var date = counter.attr('data-end'),
				seconds = counter.attr('data-seconds');

			counter.countdown({
				date: new Date(targetDate),
				render: function(date) {

					var dayZero = this.leadingZeros(date.days).slice(0,1), days;
					if( dayZero == '0' ) {
						days = '<div><span>'+ this.leadingZeros(date.days).substring(1) +'</span><p>Days</p></div>';
					}
					else {
						days = '<div><span>'+ dayZero +'</span><span>'+ this.leadingZeros(date.days).substring(1) +'</span><p>Days</p></div>';
					}

					var firsthours = this.leadingZeros(date.hours).slice(0,1),
						lasthours = this.leadingZeros(date.hours).substring(1),
						hours = '<div><span>'+ firsthours +'</span><span>'+ lasthours +'</span><p>Hours</p></div>';

					var firstmin = this.leadingZeros(date.min).slice(0,1),
						lastmin = this.leadingZeros(date.min).substring(1),
						minutes = '<div><span>'+ firstmin +'</span><span>'+ lastmin +'</span><p>Minutes</p></div>';

					var firstsec = this.leadingZeros(date.sec).slice(0,1),
						lastsec = this.leadingZeros(date.sec).substring(1),
						seconds = '<div><span>'+ firstsec +'</span><span>'+ lastsec +'</span><p>Seconds</p></div>';

					return $(this.el).html(days + hours + minutes + seconds);
				}
			});
		}

	},
	GoogleMap = function() {

		mapWrapper.gmap3({
			address: 'Paris, France',
			zoom: 14,
			mapTypeId: 'shadeOfGrey',
			mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'shadeOfGrey']
	        }
		}).styledmaptype(
			'shadeOfGrey',
            [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 20
                        },
                        {
                            "color": "#ececec"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f0ef"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f0ef"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d4d4d4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ececec"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 21
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d4d4d4"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#303030"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.government",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.place_of_worship",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "lightness": "-61"
                        },
                        {
                            "gamma": "0.00"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },{"featureType": "poi.sports_complex","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#dadada"},{"lightness": 17}]}
            ],
        {name: "Shades of Grey"}
		);

	};

	init();
	
})(jQuery);