//--- document ready 
jQuery(document).ready(function($) {
	
	"use strict";
	
// carfilter popup on car page
$('.fiter-car').on('click', function () {
	$('.filter-popup').toggleClass('show');
	return false;
});
	
// send message popup ride-request page
$('.send-msg').on('click', function () {
	$('.popup-wraper').addClass('active');
});
	$('.popup-closed, .canceled').on('click', function () {
	$('.popup-wraper').removeClass('active');
});
	
// get notification popup car leasing page
$('.get-notifn').on('click', function () {
	$('.popup-wraper').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper').removeClass('active');
});	
	
// update phone number popup edit profile page
$('.update-nmbr').on('click', function () {
	$('.popup-wraper.fone').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper.fone').removeClass('active');
});	

// add paymethods popup edit profile page
$('.add-paymethod').on('click', function () {
	$('.popup-wraper').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper').removeClass('active');
});	
	
// add deposit popup profile balance page
$('.deposit').on('click', function () {
	$('.popup-wraper').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper').removeClass('active');
});	
	
// place request popup profile ride detail page
$('.place-request').on('click', function () {
	$('.popup-wraper.request').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper.request').removeClass('active');
});
	
// partial request popup profile ride detail page
$('.partial').on('click', function () {
	$('.popup-wraper.request').removeClass('active');
	$('.popup-wraper.partel').addClass('active');
});
	$('.popup-closed').on('click', function () {
	$('.popup-wraper.partel').removeClass('active');
		return false;
});	
	
// add inermediat point sumbit route step1
$('.add-center-point').on('click', function () {
	$('.center-point').toggleClass('show');
	return false;
});	
	
//===== Responsive Header =====//
	$('.responsviemenu-btn').on('click', function () {
		$('.responsive-menu').addClass('slidein');
		return false;
	});
	$('.close-btn').on('click', function () {
		$('.responsive-menu').removeClass('slidein');
		return false;
	});
	$('.responsive-menu li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});	
//jquery date and time picker	
if ($.isFunction($.fn.datetimepicker)) {	
jQuery('#datetimepicker2, #datetimepicker4').datetimepicker({
  datepicker:false,
  format:'H:i',

});
	
//inline jquery UI calendar
$( function() {
    $( "#datepicker" ).datepicker();
  } );
	
//jquery date and time picker	
jQuery.datetimepicker.setLocale('de');

jQuery('#datetimepicker1, #datetimepicker3').datetimepicker({
 i18n:{
  de:{
   months:[
    'January','February','Märch','April',
    'May','June','July','August',
    'September','October','November','December',
   ],
   dayOfWeek:[
    "Sun.", "Mon", "tue", "wed", 
    "thr", "Fri", "Sat.",
   ]
  }
 },
 timepicker:false,
 format:'d.m.Y'
});
}

//--------- select search on feature area 			
	$('.colla-select > a').on('click', function() {
		$(this).siblings().removeClass('active');			
		$(this).addClass('active');
		return false;
	});
//-------counter for funfacts
	if ($.isFunction($.fn.counterUp)) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	}
	
//----- count down timer		
	if ($.isFunction($.fn.downCount)) {
		$('.countdown').downCount({
			date: '11/12/2019 12:00:00',
			offset: +10
		});
	}	
//--------- sticky header
	if ($.isFunction($.fn.stickit)) {
		$('.topbar').stickit({scope: StickScope.Document});
	}
	
//----- login dropdown
	$('.log-in').on('click', function() {
		$('.login-dropdown').toggleClass('active');
	});
//nice select
	if ($.isFunction($.fn.niceSelect)) {
	  $('select').niceSelect();
	}
	
//===== Touch Spin =====//
    if ($.isFunction($.fn.TouchSpin)) {
        $('.qty').TouchSpin({});
    }
    
//----- parallax
	if ($.isFunction($.fn.scrolly)) {
		$('.parallax').scrolly({bgParallax: true});
	}    	

// owl carousel 
if ($.isFunction($.fn.owlCarousel)) {	
	$('.featured-caro').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut', 
		responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:1,

				},
				1000:{
					items:1,
				}
			}
	});
	
	$('.detail-caro').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 1500,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,

			},
			1000:{
				items:1,
			}
		}
	});
	
	$('.sponsors-list').owlCarousel({
		items: 4,
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 1500,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,

			},
			1000:{
				items:4,
			}
		}
	});
	
	$('.review-caro').owlCarousel({
		items: 2,
		loop: true,
		margin: 40,
		autoplay: false,
		autoplayTimeout: 1500,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav: false,
			},
			600:{
				items:1,
				nav: false,

			},
			1000:{
				items:2,
			}
		}
	});
}

	
//--- bootstrap tooltip 
if ($.isFunction($.fn.tooltip)) {
 $('[data-toggle="tooltip"]').tooltip(); 
}
	

//===== Responsive Header =====//
	$('.menu-btn').on('click', function () {
		$('.responsive-menu').addClass('slidein');
		return false;
	});
	$('.menu-close-btn').on('click', function () {
		$('.responsive-menu').removeClass('slidein');
		return false;
	});
	$('.responsive-menu li.menu-item-has-children').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		
	});		

		
});

(function ($, window, document, undefined) {
	'use strict';

var $document, $window;
	$window = $(window);
	$document = $(document);
	//Page Load
	function pageLoad() {
		var $body = $('body');
		$window.on('beforeunload', function() {
			$body.addClass('fix-fade-out');
		});
	}
	
	$(document).ready(function() {
		pageLoad();

	});
})(jQuery, window, document);	
	
	
	





