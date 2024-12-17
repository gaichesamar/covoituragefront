$(document).ready(function () {
    "use strict";

	
	/* Preloader Script
    ======================================================*/
	
	$(".tj-loader").delay(800).slideUp(1600);
	$(".loader-outer").delay(800).slideUp(1600);
	
	
	
	/* Sticky Navigation
    ======================================================*/
	if( $('.tj-nav-row').length ){
		var stickyNavTop = $('.tj-nav-row').offset().top;
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop > 500) { 
				$('.tj-nav-row').addClass('sticky');	
			} else {
				$('.tj-nav-row').removeClass('sticky'); 
			}
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
    }
	
	
	/* Owl Slider For Partners
    ======================================================*/
    if ($('.partners-list').length) {
        $('.partners-list').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:5,
            autoplay: false,
            smartSpeed:2000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1199:{
                    items:5,
                }
            }
        });
    }
	
	/* Owl Slider For Testimonial 1
    ======================================================*/
	if ($('#testimonial-slider').length) {
        $('#testimonial-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:2,
			margin:30,
            autoplay: true,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:2,
                }
            }
        });
    }
	
	
	/* Owl Slider For Testimonial 2
    ======================================================*/
	if ($('#testimonial-slider2').length) {
        $('#testimonial-slider2').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:1,
            autoplay:true,
            smartSpeed:1200,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }
	
	
	/* Owl Slider For Home 2 Cab Slider
    ======================================================*/
	if ($('#cab-slider').length) {
        $('#cab-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:1,
            autoplay:true,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
					nav:false,
					dots:true,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }
    
    /* Blog Slider
    ======================================================*/
    if ($('#blog-slider').length) {
        $('#blog-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
			autoplay:true,
            items:3,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1199:{
                    items:1,
                }
            }
        });
    }
	
	
	/* Counter Script
    ======================================================*/
	if ($('.fact-counter').length) {
		$('.fact-counter').counterUp({
			delay: 50,
			time: 3000
		});
	}
	
	if ($('.fact-count').length) {
		$('.fact-count').counterUp({
			delay: 70,
			time: 2000
		});
	}
	if ($('.fact-num').length) {
		$('.fact-num').counterUp({
			delay: 70,
			time: 2000
		});
	}
	
	
	/* Car Price Range Filter
    ======================================================*/
	if($( "#price-range" ).length){
		$( "#price-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
		" - $" + $( "#price-range" ).slider( "values", 1 ) );
	}
	
	
	/* Owl Slider For Fleet Carousel
    ======================================================*/
	if ($('#cab-carousel').length) {
        $('#cab-carousel').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            navText:'',
            items:3,
			margin:150,
			center: true,
            autoplay: true,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1199:{
                    items:3,
                }
            }
        });
    }
	
	
	/* Cab Filter Isotope Script
    ======================================================*/
	if ($('.cab-filter').length) {
		var $container = $('.cab-filter').imagesLoaded(function() {
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});	
			$('.cab-filter-nav a').on("click", function(){
				$('.cab-filter-nav .current').removeClass('current');
				$(this).addClass('current');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				 });
				 return false;
			}); 
		});
	}
	
	/* Twitter Feed Script
    ======================================================*/
	if ($('.tj-tweets').length) {
		$('.tj-tweets').twittie({
			username: 'sameersattar13',
			dateFormat: '%b, %d, %Y',
			template: '{{tweet}}} <div class="date">{{date}}</div>',
			count: 2,
			loadingText: 'Loading!'
		});
	}
	
	
	/* Gallery Carousel Script
    ======================================================*/
		
	if($(".gallery-thumb").length && $(".gallery").length){
		var right = $(".right-outer");
		var gal_thumb = $(".gallery-thumb");
		var gal = $(".gallery");

		gal_thumb.slick({
			rows: 0,
			slidesToShow: 2,
			draggable: false,
			useTransform: false,
			mobileFirst: true,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1023,
			  settings: {
				slidesToShow: 1,
				vertical: true
			  }
			}
		  ]
		});

		gal.slick({
			rows: 0,
			useTransform: false,
			arrows: true,
			fade: true,
			autoplay: true,
			speed:600,
			cssEase: 'ease-in-out',
			asNavFor: gal_thumb,
		
		});
		$(".gallery-thumb .item").on("click", function() {
			var index = $(this).attr("data-slick-index");
			gal.slick("slickGoTo", index);
		});
	}
	function getCarouselHeight() {
		if($(".gallery-thumb").length && $(".gallery").length){
			if (window.matchMedia("(min-width: 1024px)").matches) {
				var galHeight = $(".gallery").height();
				right.css("height", galHeight);
			} else {
				right.css("height", "auto");
			}
		}else{
			return;
		}
	}

	$(window).on("load",function() {
		getCarouselHeight();
	});
		
	
	/* Contact Form Validation/Ajax Call
    ======================================================*/
    if($('#contact-form').length) {
	$("#contact-form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			subject: "required",
			message: "required"
		},
		messages: {
			name: "Please enter your name",
			email: "Please enter a valid email address",
			subject: "It is a required field",
			message: "It is a required field",
		},
		submitHandler: function(form) {
			$.ajax({
				type : 'POST', 
				url : 'contact/process.php', 
				data  : {		
					"formData" : $(form).serialize()
				},
				beforeSend: function() {
					$("#frm_submit_btn").text("Sending..").addClass('wait');
					$("#frm_submit_btn").attr('disabled','disabled');
				},
				success: function(result){
					if(result==1){
						alert("Thank you for contacting. We will get in touch with you soon!");
						$("#frm_submit_btn").text("Email Sent").addClass('success');
						$("#frm_submit_btn").removeAttr('disabled');
						$("#frm_submit_btn").removeClass('wait');
						$('#contact-form')[0].reset();
					}else{
						alert("Something went wrong. Please check your entries and try again");
						$("#frm_submit_btn").text("Email Failed").addClass('fail');
						$("#frm_submit_btn").removeAttr('disabled');
						$("#frm_submit_btn").removeClass('wait');
					}
				}
			});
			
			return false;
		}
	});
      }
		
});