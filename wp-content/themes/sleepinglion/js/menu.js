jQuery(document).ready(function(){
	jQuery("#sub_main .social_link a").click(function(){
		window.open(jQuery(this).attr('href'), 'twitter', 'width=650, height=450');
		return false;
	});

	jQuery('#myModal').on('shown.bs.modal', function () {
		  jQuery('#myModal input:first').focus()
	});

	jQuery("#mobile_menu").click(function(){
		if(jQuery("#gnb").is(':visible')) {
			jQuery("#gnb").animate({'width':'0'},'fast',function(){jQuery(this).hide()});
		} else {

			jQuery("#gnb").show().animate({'width':'50%'},'fast');
		}
		return false;
	});

	/*

	jQuery("#menu-gnb>li>a").mouseover(function(){
		if(jQuery("#mobile_menu").is(':visible'))
			return false;

		jQuery(this).focus(); //.triggerHandler("focus");
		show_menu(jQuery(this).parent());
	}).mouseout(function(){

	});
	


	jQuery("#menu-gnb>li").mouseout(function(){
		if(jQuery("#mobile_menu").is(':visible'))
			return false;
		var submenu=jQuery(this);
		submenu.show();
	});

	function show_menu(submenu){
		submenu.animate({'height': '350px'},'fast');
	}

	function hide_menu(submenu){
		submenu.animate({'height': '50px'},'fast');
	}

	jQuery("#menu-gnb>li>a").focus(function(){
		if(jQuery("#mobile_menu").is(':visible'))
			return false;

		var tindex=jQuery("#menu-gnb>li>a").index(jQuery(this));
		jQuery("#menu-gnb>li").each(function(index,value){
			if(index!=tindex) {
				hide_menu(jQuery(value));
			}
		});
		show_menu(jQuery(this).parent());
	});

	jQuery("#main").mouseover(function(){
		if(jQuery("#mobile_menu").is(':visible'))
			return false;

		jQuery("#menu-gnb>li").animate({'height': '50px'},'fast');
	});

	jQuery("#menu-gnb li ul li a").click(function(){
		location.href=jQuery(this).attr('href');
		return true;
		jQuery("#main").off('mouseover');
		jQuery('#menu-gnb>li>a').off('blur');
	});
	*/

});
