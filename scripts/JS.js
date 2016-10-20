$(function() {
	// body...
	var offset=$("#sidebar").offset();
	var topPadding=150;
	$(window).scroll(function() {
		if ($(window).scrollTop()>offset.top) {
		console.log($(window).scrollTop()-offset.top);			
			$("#sidebar").stop().animate({
				marginTop:$(window).scrollTop()-offset.top+topPadding
			});
		}else{
			$("#sidebar").stop().animate({
				marginTop:0
			});
		}
	});
//	console.log(offset);
});