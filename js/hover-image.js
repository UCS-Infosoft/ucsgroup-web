$(document).ready(function() { 
	$(".lightbox-image").append("<span></span>");
	
	$('.lightbox-image')
		.live('mouseenter',function(){
			$(this).find("span").stop()
			.animate({opacity:1},{duration:500, easing:'easeOutQuart'});
		})
		.live('mouseleave',function(){
			$(this).find("span").stop()
			.animate({opacity:0},{duration:500, easing:'easeOutQuart'});
	});
});