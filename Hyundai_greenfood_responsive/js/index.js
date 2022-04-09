// JavaScript Document
$(document).ready(function() {
	$("nav > ul > li, #nav_bg").hover(function() {		
		if($(window).width() > 1024) {
			$("nav > ul > li > ul > li").stop().slideDown(200);
			$("#nav_bg").css("border-top", "1px solid #474747").stop().slideDown(200);
			
		}
	}, function() {
		if($(window).width() > 1024) {
			$("nav > ul > li > ul > li").stop().slideUp(200);
			$("#nav_bg").css("border-top", "none").stop().slideUp(200);
		}
	});	

	$("nav > ul > li, #nav_bg").hover(function() {		
		if($(window).width() > 1280) {			
			$("#top").css("background-color", "rgba(0, 0 , 0, 0.7)");
		}
	}, function() {
		if($(window).width() > 1280) {
			$("#top").css("background-color", "transparent");
		}
	});
	
	$("nav > ul > li").hover(function() {		
		if($(window).width() > 1024) {
			$(this).css("border-bottom", "3px solid orange")
			$(this).find(">a").css("color", "orange")
			
		}
	}, function() {
		if($(window).width() > 1024) {
			$(this).css("border-bottom", "0")
			$(this).find(">a").css("color", "#333")
		}
	});	

	$("nav > ul > li").hover(function() {		
		if($(window).width() > 1280) {			
			$(this).css("border-bottom", "3px solid orange")
			$(this).find(">a").css("color", "orange")
		}
	}, function() {
		if($(window).width() > 1280) {
			$(this).css("border-bottom", "0")
			$(this).find(">a").css("color", "#FFF")
		}
	});
	
	
	$("#business_contents_1, #business_contents_2, #business_contents_3, #business_contents_4, #business_contents_5, #business_contents_6").hover(function() {
		$(this).find(".business_bg").stop().animate({ backgroundColor: "rgba(0, 0, 0, 0.5)" }, "slow");
	}, function() {
		$(this).find(".business_bg").stop().animate({ backgroundColor: "transparent" }, "slow");
	});
	
	$("#news_text, #news_text a").hover(function() {
		$("#news_text").css("border", "1px solid #e4a11b")
		$("#news_text a").css("color", "#e4a11b")
	}, function() {
		$("#news_text").css("border", "1px solid #FFF")
		$("#news_text a").css("color", "#FFF")
	});
	
	$(".social_textbox p").hover(function() {
		$(this).find("a").css({"text-decoration" : "underline",  "text-decoration-color" : "#595959"})
	}, function() {
		$(this).find("a").css("text-decoration", "none");	
	});
	
	$(".brand_text > p").hover(function() {
		$(this).find("a").css({"text-decoration" : "underline",  "text-decoration-color" : "#595959"})
	}, function() {
		$(this).find("a").css("text-decoration", "none");	
	});
	
	$(".brand_img").hover(function() {
		$(this).siblings(".brand_text").css({"text-decoration" : "underline",  "text-decoration-color" : "#595959"})
	}, function() {
		$(this).siblings(".brand_text").css("text-decoration", "none");	
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
	});
	

	$(window).resize(function() {
		if($(window).width() <= 1280) {
			$("#top").css("background-color", "#FFF");
			$("#nav_bg").css("background-color","#FFF");
			$("nav > ul > li > a").css("color", "#333")
			

		} else {
			$("#top").css("background-color", "transparent");
			$("#nav_bg").css("background-color","rgba(0, 0 , 0, 0.7)");
			$("nav > ul > li > a").css("color", "#FFF")
		}
	});
	
	
	
});
