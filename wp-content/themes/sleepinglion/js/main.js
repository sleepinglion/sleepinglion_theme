jQuery(document).ready(function(){


	jQuery('#myCarousel').carousel({
		  interval: 4000
		})

		jQuery('#sl_menu_content .carousel .item').each(function(){
		  var next = jQuery(this).next();
		  if (!next.length) {
		    next = jQuery(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo(jQuery(this));

		  for (var i=0;i<2;i++) {
		    next=next.next();
		    if (!next.length) {
		    	next = jQuery(this).siblings(':first');
		  	}

		    next.children(':first-child').clone().appendTo(jQuery(this));
		  }
		});

	jQuery(".no_link").click(function(){
		if(jQuery("#select_menu").is(':visible')) {
			jQuery("#select_menu").fadeOut();
		} else {
			jQuery("#select_menu").fadeIn();
		}

		return false;
	});



});  // Document Ready Close
