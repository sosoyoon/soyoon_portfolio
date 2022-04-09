// JavaScript Document
$(document).ready(function() {
	$("nav > ul > li").hover(function() {
				$(this).css("background-color", "#e71a11");
				$(this).find(">a").css("color" , "#FFF");
				$(this).find("li").stop().slideDown(200);
			}, function() {
				$(this).css("background-color", "transparent");
				$(this).find(">a").css("color", "#000");
				$(this).find("li").stop().slideUp(200);
	});
		
		
	$( "#accordion" ).accordion({
		heightStyle: "content",
		active: false,
		collapsible: true 
	});
	
	var state = true;
	
	$("#m_btn, #accordion_bg").stop().on("click", function() {
		if ( state ) {
			$("#accordion").animate({"left" : "0"});
			$("#accordion_bg").css({"display" : "block"});
			$("#wrap").css({"height" : "620px", "overflow" : "hidden"});	
		} else {
			$("#accordion").animate({"left" : "-100%"});
			$("#accordion_bg").css({"display" : "none"});
			$("#wrap").css({"height" : "auto", "overflow" : "auto"});	
		}
		state = !state;	
		});
});		
	