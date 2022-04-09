// JavaScript Document
$(document).ready(function() {
	
	$("nav > ul > li, #nav_bg").hover(function() {
		
		if($(window).width() > 1280) {
			$("nav > ul > li > ul > li").stop().slideDown(200);
			$("#nav_bg").css("border-top", "1px solid #d7d7d7").stop().slideDown(200);
		}
		
		if($(window).width() <= 1280) {
			$("nav > ul > li > ul > li").stop().slideDown(200);
			$("#nav_bg").stop().css({"border-top" : "1px solid #d7d7d7", "background-color" : "rgba(255, 255 , 255, 1)"}).slideDown(200);
					}
		
		
	}, function() {
		if($(window).width() > 1280) {
			$("nav > ul > li > ul > li").stop().slideUp(200);
			$("#nav_bg").stop().slideUp(200);
		}
		
		
		if($(window).width() <= 1280) {
			$("nav > ul > li > ul > li").stop().slideUp(200);
			$("#nav_bg").stop().slideUp(200);
		}
		
	});
	
	$("nav > ul > li").hover(function() {
		$(this).css("border-bottom", "3px solid orange");
		$(this).find(">a").css("color", "orange")
	}, function() {
		$(this).css("border-bottom", "0");	
		$(this).find(">a").css("color", "#333")
	});
	
	$( "#accordion_wrap" ).accordion({
		heightStyle: "content",
		active: false,
		collapsible: true 
	});
	
	var state = true;
	
	$("#m_btn, #accordion_bg").stop().on("click", function() {
		if ( state ) {
			$("#accordion").animate({"left" : "0"});
			$("#accordion_bg").css({"display" : "block"});
			$("#wrap").css({"height" : "650px", "overflow" : "hidden"});	
			$("#top").css("border-bottom", "1px solid  #d7d7d7");
		} else {
			$("#accordion").animate({"left" : "-100%"});
			$("#accordion_bg").css({"display" : "none"});
			$("#wrap").css({"height" : "auto", "overflow" : "auto"});	
			$("#top").css("border-bottom", "none");
		}
		state = !state;
	

	$(window).resize(function() {
		if($(window).width() <= 1280) {
			$("#top").css("background-color", "#FFF");

		} else {
			$("#top").css("background-color", "transparent");
		}
	});
	
	});
});
