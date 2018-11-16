$(function () {
	// Hides on start up
	$('.quotetxt').hide()

	// Waits 1.5 seconds before fading in
	setTimeout(() => {
		$(".quotetxt").fadeIn(600)
	}, 1500)

	// Slideshow arrows
	$('.slideshow-arrow').on('click', function () {
		if ($('.slideshow').css('background-image').includes("flask")) {
			$(".slideshow").css("background-image", "url(../../images/pygame.png)")
		} else {
			$(".slideshow").css("background-image", "url(../../images/flask.png)")
		}
	})

	// Tabs on cards
	$(".card .nav-link").on('click', function (e) {
		e.preventDefault()
		// gets tab value
		var tabTitle = $(this).text()
		// deactivates current active tab
		$('.card-header .active').removeClass('active')
		// activates clicked tab
		$(this).addClass('active')
		// hides active body
		$(".card-body .current").addClass('hidden').removeClass("current")

		// activates clicked body through switch case
		switch (tabTitle) {
			case "Variables":
				$(".var").addClass('current').removeClass('hidden')
				break;
			case "Conditional":
				$(".cond").addClass('current').removeClass('hidden')
				break;
			case "Loops":
				$(".loop").addClass('current').removeClass('hidden')
				break;

			default:
				break;
		}
	})


	// Inter tab naviation
	$(".first-tab").on('click', function (e) {
		e.preventDefault()
		$('.card-header .active').removeClass('active')
		$('.nav-link:contains("Conditional")').addClass('active')
		$(".card-body .current").addClass('hidden').removeClass("current")
		$(".cond").addClass('current').removeClass('hidden')
	})

	$(".second-tab").on('click', function (e) {
		e.preventDefault()
		$('.card-header .active').removeClass('active')
		$(".card-body .current").addClass('hidden').removeClass("current")
		if ($(this).hasClass('forward')) {
			$('.nav-link:contains("Loops")').addClass('active')
			$(".loop").addClass('current').removeClass('hidden')
		} else {
			$('.nav-link:contains("Variables")').addClass('active')
			$(".var").addClass('current').removeClass('hidden')
		}
	})

	$(".third-tab").on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('back')) {
			$('.card-header .active').removeClass('active')
			$(".card-body .current").addClass('hidden').removeClass("current")
			$('.nav-link:contains("Conditional")').addClass('active')
			$(".cond").addClass('current').removeClass('hidden')
		} else {
			window.location = "../quizzes/python.html"
		}
	})
})