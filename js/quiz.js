$(function(){
	// variable declaration
	var selector;
	// shows first question
	$(".part-0").show()

	// answer selector
	$('.form-check-input').on('click', function(){
		selector = "#" + $(this).attr('id')
	})

	// logic for all question buttons
	$(".question .btn").on('click', function(e){
		// stops href
		e.preventDefault()
		var number = 0
		// Gets question number
		$(this).parent().parent().attr('class').split(/\s+/).forEach((element) => {
			if (element.includes('part-')){
				number = element.substr(-1)
			}
		});
		// checks type of button
		if ($(this).hasClass('btn-prev')){
			// goes back
			$(this).parent().parent().hide()
			$('.part-' + (parseInt(number) - 1)).fadeIn()
			$('.progress-bar').animate({
				width: ((parseInt(number) - 1) *20) + '%' // updates progress bar
			})
		} else {
			if ($(this).text().includes('Check')){
				// checks answer
				if ($(selector).attr('value') == 'correct'){
					$('.progress-bar').animate({
						backgroundColor: '#00cc00' // Green animation
					})
					setTimeout(() => {
						$('.progress-bar').animate({
							backgroundColor: '##007bff'// goes back to blue
						})
					}, 1000)
				} else {
					
					$('.progress-bar').addClass('animated shake').animate({
						backgroundColor: '#a40000' // red animation and shake
					})
					setTimeout(() => {
						$('.progress-bar').removeClass('animated shake').animate({
							backgroundColor: '##007bff' // goes back to blue
						})
					}, 1000)
				}
			} else {
				// Goes forward
				$(this).parent().parent().hide()
				$('.part-' + (parseInt(number) + 1)).fadeIn()
				$('.progress-bar').animate({
					width: ((parseInt(number) + 1) * 20) + "%" // updates progress bar
				})
			}
		}
	})
	// Generates answers
	$("a:contains('Answers')").on('click', function(e){
		// variables
		var elems
		var flag = true
		var list = []
		// nested for loop
		for (var i = 1; i < 5; ++i){
			// gets list of questions
			elems = $('.part-' + i).find('.form-check-input')
			flag = true
			for (var j = 0; j < 5; ++j){
				// iterates throhg options 
				if ($(elems[j]).prop('checked') && $(elems[j]).prop('value') == 'correct') {
					list.push(true)
					flag = false
					break
				}
			}
			if (flag){
				list.push(false)
			}
		}
		list.forEach((element, index) => {
			// iterates through answers
			if (element == true){
				element = 'correct'
			} else {
				element = 'incorrect'
			}
			index += 1
			// generates html template
			var html = `<p>Question ${index}: ${element}</p>`
			// appends to final page
			$('.ans').append(html)
		})
	})
})