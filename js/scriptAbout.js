(function($){

	var markers = [];
	var iterator = 0;
	var icon = '../img/marker.png';
	var map;
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(39.8282,-98.5795),
		draggable: true,
		panControl: false,
		zoomControl:  false,
		scaleControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var locations = [
		new google.maps.LatLng(32.844573,-117.276329),
		new google.maps.LatLng(33.407436,-111.919678),
		new google.maps.LatLng(34.028419,-118.473742),
		new google.maps.LatLng(49.271867,-123.1807),
		new google.maps.LatLng(34.020964,-118.423597),
		new google.maps.LatLng(32.899836,-117.197227),
		new google.maps.LatLng(21.288835,-157.711832),
		new google.maps.LatLng(32.722374,-117.244136),
		new google.maps.LatLng(34.022558,-118.382916),
		new google.maps.LatLng(32.896156,-117.188163),
		new google.maps.LatLng(32.897429,-117.121478),
		new google.maps.LatLng(32.742292,-117.183932),
		new google.maps.LatLng(32.928478,-117.193114),
		new google.maps.LatLng(32.725386,-117.167112),
		new google.maps.LatLng(39.516536,-119.81029),
		new google.maps.LatLng(36.008763,-115.136853),
		new google.maps.LatLng(33.02784,-116.803791),
		new google.maps.LatLng(32.776774,-117.019616),
		new google.maps.LatLng(40.703617,-74.009656),
		new google.maps.LatLng(32.94145,-117.035253),
		new google.maps.LatLng(39.857467,-104.917128),
		new google.maps.LatLng(47.20605,-122.233164),
		new google.maps.LatLng(34.097998,-118.331945),
		new google.maps.LatLng(34.020116,-118.497051),
		new google.maps.LatLng(40.846696,-81.434653),
		new google.maps.LatLng(32.827888,-117.146149),
		new google.maps.LatLng(33.123105,-117.010375),
		new google.maps.LatLng(47.623578,-122.153645),
		new google.maps.LatLng(33.025898,-117.062716),
		new google.maps.LatLng(34.178203,-118.8562),
		new google.maps.LatLng(26.537817,-80.04675),
		new google.maps.LatLng(33.037562,-117.239483),
		new google.maps.LatLng(37.791776,-122.395055),
		new google.maps.LatLng(38.54424,-122.808359),
		new google.maps.LatLng(40.561813,-105.039354),
		new google.maps.LatLng(33.495126,-111.999529),
		new google.maps.LatLng(32.908329,-117.243974),
		new google.maps.LatLng(19.690909,-156.019495),
		new google.maps.LatLng(40.716523,-74.00431),
		new google.maps.LatLng(33.121657,-117.078998),
		new google.maps.LatLng(32.843669,-117.274815),
		new google.maps.LatLng(32.874313,-117.205895),
		new google.maps.LatLng(32.891315,-117.193998),
		new google.maps.LatLng(40.58147,-105.076259),
		new google.maps.LatLng(32.889315,-117.178357),
		new google.maps.LatLng(33.881022,-117.721077),
		new google.maps.LatLng(32.780378,-116.950047),
		new google.maps.LatLng(47.20605,-122.233164),
		new google.maps.LatLng(40.643352,-111.495691),
		new google.maps.LatLng(25.11868,55.263605),
		new google.maps.LatLng(43.038658,-87.908416),
		new google.maps.LatLng(33.649726,-117.864434),
		new google.maps.LatLng(32.741628,-117.18357),
		new google.maps.LatLng(32.718821,-117.166615),
		new google.maps.LatLng(32.865631,-117.211132),
		new google.maps.LatLng(40.58147,-105.076259),
		new google.maps.LatLng(41.244748,-76.904173),
		new google.maps.LatLng(33.978452,-118.465157),
		new google.maps.LatLng(40.465246,-106.823382),
		new google.maps.LatLng(46.879189,-102.785486),
		new google.maps.LatLng(40.449449,-79.996595),
		new google.maps.LatLng(25.903825,-80.32973),
		new google.maps.LatLng(47.624416,-122.161234),
		new google.maps.LatLng(33.31385,-91.044624),
		new google.maps.LatLng(40.526434,-105.037505),
		new google.maps.LatLng(33.511969,-117.660963),
		new google.maps.LatLng(32.903279,-117.098746),
		new google.maps.LatLng(32.727925,-117.152998),
		new google.maps.LatLng(32.785616,-117.112386),
		new google.maps.LatLng(32.747699,-117.129207),
		new google.maps.LatLng(48.860879,-122.442717),
		new google.maps.LatLng(33.038959,-117.292886),
		new google.maps.LatLng(32.940855,-117.02783),
		new google.maps.LatLng(34.436874,-77.934792),
		new google.maps.LatLng(33.683941,-117.808211),
		new google.maps.LatLng(32.820972,-117.122654),
		new google.maps.LatLng(32.808982,-117.248922),
		new google.maps.LatLng(33.15728,-117.308021),
		new google.maps.LatLng(29.774817,-95.59827),
		new google.maps.LatLng(40.072857,-74.164894),
		new google.maps.LatLng(32.813334,-116.935524),
		new google.maps.LatLng(33.707049,-117.933682),
		new google.maps.LatLng(32.718821,-117.166615),
		new google.maps.LatLng(32.718527,-116.880997),
		new google.maps.LatLng(41.950415,-93.501868),
		new google.maps.LatLng(42.714071,-78.843875),
		new google.maps.LatLng(32.746765,-117.176027),
		new google.maps.LatLng(43.135835,-85.610936),
		new google.maps.LatLng(40.49051,-106.834698),
		new google.maps.LatLng(32.715695,-117.161719),
		new google.maps.LatLng(40.48785,-106.836389),
		new google.maps.LatLng(33.013324,-117.074829),
		new google.maps.LatLng(38.729282,-121.299982),
		new google.maps.LatLng(42.468678,-71.585083),
		new google.maps.LatLng(37.516966,-122.045079),
		new google.maps.LatLng(32.987287,-117.068184),
		new google.maps.LatLng(42.480179,-79.003883),
		new google.maps.LatLng(33.224687,-117.2358),
		new google.maps.LatLng(40.565908,-105.068599),
		new google.maps.LatLng(35.980117,-115.099079),
		new google.maps.LatLng(43.02836,-88.149766),
		new google.maps.LatLng(32.826038,-117.230139),
		new google.maps.LatLng(37.173511,-89.194276),
		new google.maps.LatLng(32.868281,-117.227532),
		new google.maps.LatLng(-31.954676,115.852551),
		new google.maps.LatLng(33.929202,-84.69923),
		new google.maps.LatLng(33.34672,-111.721479),
		new google.maps.LatLng(32.915612,-117.14027),
		new google.maps.LatLng(40.099399,-74.321316),
		new google.maps.LatLng(46.536025,-111.935074),
		new google.maps.LatLng(37.793482,-122.433799),
		new google.maps.LatLng(32.984195,-117.26535),
		new google.maps.LatLng(39.66798,-76.379189),
		new google.maps.LatLng(32.749911,-117.171581),
		new google.maps.LatLng(33.468298,-117.705464),
		new google.maps.LatLng(34.12664,-117.195675),
		new google.maps.LatLng(35.609363,-90.010287),
		new google.maps.LatLng(34.105455,-117.711147),
		new google.maps.LatLng(40.401025,-105.150741),
		new google.maps.LatLng(40.773158,-73.924249),
		new google.maps.LatLng(32.891516,-117.15338),
		new google.maps.LatLng(32.798148,-116.908267),
		new google.maps.LatLng(22.81144,120.496796),
		new google.maps.LatLng(32.915612,-117.14027),
		new google.maps.LatLng(34.181255,-118.872466),
		new google.maps.LatLng(37.767783,-122.431205),
		new google.maps.LatLng(33.044211,-117.292371),
		new google.maps.LatLng(33.620382,-117.929511),
		new google.maps.LatLng(47.610173,-122.333469),
		new google.maps.LatLng(32.970132,-117.263448),
		new google.maps.LatLng(52.35116,-0.84762),
		new google.maps.LatLng(40.581465,-105.073535),
		new google.maps.LatLng(32.903894,-117.216011),
		new google.maps.LatLng(39.122502,-104.761767),
		new google.maps.LatLng(32.218721,-110.764941),
		new google.maps.LatLng(29.774817,-95.59827),
		new google.maps.LatLng(32.984567,-117.270043),
		new google.maps.LatLng(40.445452,-105.078731),
		new google.maps.LatLng(40.01542,-105.281199),
		new google.maps.LatLng(33.141534,-117.187754),
		new google.maps.LatLng(32.859987,-116.85677),
		new google.maps.LatLng(32.792201,-117.192042),
		new google.maps.LatLng(34.429902,-118.572148),
		new google.maps.LatLng(33.015384,-117.278183),
		new google.maps.LatLng(32.950379,-117.066385),
		new google.maps.LatLng(33.111473,-117.095884),
		new google.maps.LatLng(37.804335,-122.262704),
		new google.maps.LatLng(41.885294,-87.626255),
		new google.maps.LatLng(28.524535,-81.156213),
		new google.maps.LatLng(9.023504,-83.510406),
		new google.maps.LatLng(32.806309,-117.247421),
		new google.maps.LatLng(47.192141,19.325846),
		new google.maps.LatLng(32.842605,-117.009625),
		new google.maps.LatLng(32.715695,-117.161719),
		new google.maps.LatLng(40.586992,-105.082689),
		new google.maps.LatLng(32.715695,-117.161719),
		new google.maps.LatLng(29.734115,-95.423635),
		new google.maps.LatLng(40.595095,-105.118356),
		new google.maps.LatLng(34.541904,-112.469121),
		new google.maps.LatLng(40.776573,-74.017686),
		new google.maps.LatLng(32.565973,-117.0596),
		new google.maps.LatLng(32.731192,-117.169607),
		new google.maps.LatLng(32.75651,-117.038923),
		new google.maps.LatLng(-27.527758,153.017578),
		new google.maps.LatLng(32.907227,-117.157363),
		new google.maps.LatLng(40.606852,-105.044266),
		new google.maps.LatLng(47.20605,-122.233164),
		new google.maps.LatLng(33.01834,-117.19175),
		new google.maps.LatLng(32.941319,-117.100168),
		new google.maps.LatLng(32.840556,-117.280087),
		new google.maps.LatLng(29.787043,-95.599321),
		new google.maps.LatLng(40.48563,-106.833768),
		new google.maps.LatLng(40.074782,-104.97822),
		new google.maps.LatLng(32.908329,-117.243974),
		new google.maps.LatLng(32.776141,-117.138545),
		new google.maps.LatLng(33.001132,-117.120287),
		new google.maps.LatLng(40.14323,-74.726715),
		new google.maps.LatLng(33.20471,-117.307253),
		new google.maps.LatLng(32.800434,-117.237833),
		new google.maps.LatLng(40.688037,-73.977603),
		new google.maps.LatLng(32.945583,-117.24071),
		new google.maps.LatLng(48.841399,2.317618),
		new google.maps.LatLng(33.707037,-117.917423),
		new google.maps.LatLng(32.692814,-117.132136),
		new google.maps.LatLng(32.715695,-117.161719),
		new google.maps.LatLng(32.9387,-115.581864),
		new google.maps.LatLng(32.948174,-117.256719),
		new google.maps.LatLng(32.839979,-117.272338),
		new google.maps.LatLng(32.82341,-116.969772),
		new google.maps.LatLng(33.722858,-117.847901),
		new google.maps.LatLng(37.957507,-121.975353),
		new google.maps.LatLng(40.703742,-74.008242),
		new google.maps.LatLng(33.747108,-117.86998),
		new google.maps.LatLng(33.13554,-117.332309),
		new google.maps.LatLng(33.125706,-117.12752),
		new google.maps.LatLng(33.054177,-117.267566),
		new google.maps.LatLng(32.715695,-117.161719),
		new google.maps.LatLng(32.883046,-117.163016),
		new google.maps.LatLng(35.998888,-115.112184),
		new google.maps.LatLng(32.890867,-117.150321),
		new google.maps.LatLng(33.930811,-118.380881),
		new google.maps.LatLng(40.019324,-105.273095),
		new google.maps.LatLng(32.941014,-117.022284),
		new google.maps.LatLng(32.90157,-96.802303),
		new google.maps.LatLng(32.715778,-117.168403),
		new google.maps.LatLng(34.685031,-82.824617),
	];

	var init = function(){

		//Allow opening popup on middle mouse click. 
    	//Always set it to true if you don't provide alternative source in href.
		// Hinge effect popup
		$('#team .item a').magnificPopup({
		  mainClass: 'mfp-with-fade',
		  removalDelay: 1000, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeClose: function() {
		        this.content.addClass('hinge');
		    }, 
		    close: function() {
		        this.content.removeClass('hinge'); 
		    }
		  },
		  midClick: true
		});

		$("#us").on("click",function(e){
			e.preventDefault();
			e.stopPropagation();

			map.setZoom(4); 
			map.panTo(new google.maps.LatLng(40.0000,-100.0000));	
		});

		$("#globally").on("click",function(e){

			e.preventDefault();
			e.stopPropagation();

			map.setZoom(2); 
			map.panTo(new google.maps.LatLng(18.312811,12.304688));

		})

	
  		map = new google.maps.Map(document.getElementById('canvas'),mapOptions);

		var grayscale = [{"stylers":[{"visibility":"simplified"}]},{"stylers":[{"color":"#131314"}]},{"featureType":"water","stylers":[{"color":"#1d1e25"}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":25}]}];

    	map.setOptions({styles: grayscale});

		/*map.addEventListener("touchstart", thisTouchStart, true);
		map.addEventListener("touchend", thisTouchEnd, true);
		map.addEventListener("touchmove", thisTouchMove, true);
*/
		var counted = false;
		$('#map').one('inview', function (event, visible) {
		    if (visible == true && !counted) {
		    	//conofiguramos los markers.
		        for (var i = 0; i <= locations.length; i++) {
				    setTimeout(function() {
				    	//Añadimos el marcador.	
				      	markers.push(new google.maps.Marker({
				      		position: locations[iterator],
						    map: map,
							icon: icon,
						    draggable: false,
						    animation: google.maps.Animation.DROP
						}));
					  	iterator++;

				    }, i * 35);
				}

				$('#client-count').animate({countNum: 247}, {
				  	duration: 7000,
				  	easing:'linear',
				  	step: function() {
				  		console.log("Valor de Count Num : " + this.countNum);
				    	$('#client-count').text(parseInt(this.countNum)+1);
						counted = true;
				  	}
				});
		    } else {
		        // element has gone out of viewport
		    }
		});

	}


	google.maps.event.addDomListener(window, 'load', init);


})(jQuery);