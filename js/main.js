/* Animate.css init */
// See https://github.com/daneden/animate.css/issues/644
var animationEnd = (function (el) {
	var animations = {
		animation: 'animationend',
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'mozAnimationEnd',
		WebkitAnimation: 'webkitAnimationEnd',
	};

	for (var t in animations) {
		if (el.style[t] !== undefined) {
			return animations[t];
		}
	}
})(document.createElement('div'));

$(function(){
	/* Sticky Navbar */
	let stickyVal = $('.navbar').offset().top
	$(document).on('scroll', () => {
		if (stickyVal <= $(document).scrollTop()) {
			$('.navbar').addClass('sticky')
			$('main').addClass('stuck')
		} else {
			$('.navbar').removeClass('sticky')
			$('main').removeClass('stuck')
		}
	})
	/* Color changing navbar */
	$('.navbar-brand').on('mouseenter', function () {
		// Just brand
		$(this).addClass('highlighted')
	}).on('mouseleave', function () {
		// Just brand
		$(this).removeClass('highlighted')
	}).on('click', function (e) {
		// Whole navbar
		e.preventDefault();
		console.log("HELLO");
		console.log($('.navbar').css("background-color"));
		if ($('.navbar').css("background-color") == "rgb(8, 15, 91)") {
			$('.navbar').animate({
				backgroundColor: "#15DB95"
			})
			$('.navbar-brand, .nav-link').animate({
				color: '#0D19A3'
			})
		} else {
			$('.navbar').animate({
				backgroundColor: "#080F5B"
			})
			$('.navbar-brand, .nav-link').animate({
				color: '#E4C580'
			})
		}
	})

	/* Search bar animation */
	$('form .btn').on('click', function (e) {
		e.preventDefault();
		$('form input').addClass("animated shake").one(animationEnd, function () {
			$('form input').removeClass("animated shake")
			alert("Search not implemented")
		})

	})
})