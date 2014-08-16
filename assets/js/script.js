$(document).ready(function(){

	/** Scrolling for navbar links **/

	$('#cover_down_arrow').click(function(){
		// $('html, body').animate({
		// 	scrollTop: $('#content').offset().top
		// }, 500);
		$('html, body').scrollTo($('#about_main_container'), 500, {offset: {top: (-73)} });
	});

	$('#nav_about').click(function(){
		$('html, body').scrollTo($('#about_main_container'), 500, {offset: {top: (-73)} });
	});

	$('#nav_volunteer').click(function(){
		$('html, body').scrollTo($('#about_volunteer_container'), 500, {offset: {top: (-73)} });
	});

	$('#nav_donation').click(function(){
		$('html, body').scrollTo($('#about_donation_container'), 500, {offset: {top: (-73)} });
	});

	$('#nav_contact').click(function(){
		$('html, body').scrollTo($('#contact_container'), 500, {offset: {top: (-73)} });
	});


	/** Navbar Highlight on Hover **/

	// $('#nav_about').hover(
	// 	function(){
	// 		$('#nav_about').addClass('current_nav_section');
	// 	},
	// 	function(){
	// 		$('#nav_about').removeClass('current_nav_section');
	// 	}
	// );

	// $('#nav_volunteer').hover(
	// 	function(){
	// 		$('#nav_volunteer').addClass('current_nav_section');
	// 	},
	// 	function(){
	// 		$('#nav_volunteer').removeClass('current_nav_section');
	// 	}
	// );

	// $('#nav_donation').hover(
	// 	function(){
	// 		$('#nav_donation').addClass('current_nav_section');
	// 	},
	// 	function(){
	// 		$('#nav_donation').removeClass('current_nav_section');
	// 	}
	// );

	// $('#nav_contact').hover(
	// 	function(){
	// 		$('#nav_contact').addClass('current_nav_section');
	// 	},
	// 	function(){
	// 		$('#nav_contact').removeClass('current_nav_section');
	// 	}
	// );


	/** Down Arrow Bouncing **/

	var cover_down_arrow_timer;

	$('#cover_down_arrow').hover(
		function(){
			if (cover_down_arrow_timer) {
				clearTimeout(cover_down_arrow_timer);
				cover_down_arrow_timer = null;
			}
			cover_down_arrow_timer = setTimeout(function() {
				$('#cover_down_arrow').effect("bounce", {times: 3}, 1000);
			}, 600)
		},
		function(){
		}
	);

	// cooler method of addressing animation loops for down arrow, uses a jQuery plugin

	// $('#cover_down_arrow').hoverIntent(
	// 	function(){
	// 		$('#cover_down_arrow').effect("bounce", {times: 3}, 1000);
	// 	},
	// 	function(){
	// 		jQuery.noop();
	// 	}
	// );




	/** Waypoints for navbar highlighting **/

	$('#about_main_container').waypoint(function(){
		$('#nav_about').addClass('current_nav_section');
		// $('#nav').css({backgroundColor: "rgba(98, 155, 233, 1)"});
		$('#nav').animate({backgroundColor: "rgba(98, 155, 233, 1)"}); // using animate instead of .css() for transition time, hope that's okay
	}, { offset: 73 });

	$('#cover_content_container').waypoint(function(up){
		$('#nav_about').removeClass('current_nav_section');
		// $('#nav').css({backgroundColor: "rgba(0, 0, 0, 0.7)"});
		$('#nav').animate({backgroundColor: "rgba(0, 0, 0, 0.7)"}); // using animate instead of .css() for transition time, hope that's okay
	}, { offset: 73 });

	$('#about_volunteer_container').waypoint(function(down){
		$('#nav_volunteer').addClass('current_nav_section');
		$('#nav_about').removeClass('current_nav_section');
	}, { offset: 73});

	$('#nav_about_waypoint').waypoint(function(up){
		$('#nav_volunteer').removeClass('current_nav_section');
		$('#nav_about').addClass('current_nav_section');
	}, { offset: 73});

	$('#about_donation_container').waypoint(function(down){
		$('#nav_donation').addClass('current_nav_section');
		$('#nav_volunteer').removeClass('current_nav_section');
	}, { offset: 73});

	$('#nav_volunteer_waypoint').waypoint(function(up){
		$('#nav_donation').removeClass('current_nav_section');
		$('#nav_volunteer').addClass('current_nav_section');
	}, { offset: 73});

	$('#contact_container').waypoint(function(down){
		$('#nav_contact').addClass('current_nav_section');
		$('#nav_donation').removeClass('current_nav_section');
	}, { offset: 73});

	$('#about_donation_description').waypoint(function(up){
		$('#nav_contact').removeClass('current_nav_section');
		$('#nav_donation').addClass('current_nav_section');
	}, { offset: 73});


	/** Email Modal **/

	$('#contact_email_button').click(function(){
    	$('#email-modal-container').show();
	});

	$('#email-submit').click(function(){
    	$('#email-modal-container').hide();
	});

	$('#email-cancel').click(function(){
    	$('#email-modal-container').hide();
	});

	$('#modal-overlay').click(function(){
    	$('#email-modal-container').hide();
	});

});