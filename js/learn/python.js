$(function(){
	$('.quotetxt').hide()
	setTimeout(()=>{
		$(".quotetxt").fadeIn(600)
	}, 1500)
	$('.slideshow-arrow').on('click', function() {
		if ($('.slideshow').css('background-image').includes("flask")){
			$(".slideshow").css("background-image", "url(../../images/pygame.png)")
		} else {
			$(".slideshow").css("background-image", "url(../../images/flask.png)")
		}
	})
})