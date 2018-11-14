$(function(){
	let stickyVal = $('.navbar').offset().top
	$(document).on('scroll', (e) => {
		/* Sticky Navbar */
		if (stickyVal <= $(document).scrollTop()) {
			$('.navbar').addClass('sticky')
			$('main').addClass('stuck')
		} else {
			$('.navbar').removeClass('sticky')
			$('main').removeClass('stuck')
		}
	})
})