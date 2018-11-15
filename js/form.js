// Form validation
function validateEmail(email) {
	if (typeof email == 'string') {
		return /.+@.+\..+/.test(email)
	} else {
		return false
	}
}

function validateUsername(username) {
	if (typeof username == 'string') {
		return (username.length >= 5 && !/[^a-z]/i.test(username))
	} else {
		return false
	}
}

function validatePassword(pass) {
	if (typeof pass == 'string') {
		return (pass.length >= 3)
	} else {
		return false
	}
}

function validatePhone(phone) {
	if (typeof phone == 'string') {
		return (!/[^0-9]/.test(phone) && phone.length >= 9 && phone.length <= 15)
	} else {
		return false
	}
}

function getUrl(selector){
	if ($(selector).attr('href') !== undefined){
		return $(selector).attr('href')
	} else {
		if($(selector).val() == "C++"){
			return 'views/learning/cpp.html'
		} else {
			return 'views/learning/python.html'
		}
	}
}

let modalVal = ""
let username = "Admin"
let passowrd = "1234"

$(function(){
	/* Modal */
	$(".modal-trigger").on('click', function () {
		modalVal = $(this).text()
		console.log($(this).text(), modalVal)
	})
	$(".btn + .login").on('click', function () {
		var url = getUrl("button:contains('" + modalVal + "')")
		if (($('#InputEmail').val() == username) && ($('#InputPassword').val() == passowrd)) {
			window.location = url
			console.log("Login Succsess")
		} else {
			console.log("Login failed")
		}
	})

	$("#both").on('click', function(){
		$('#TOS').prop("checked", true)
		$("#newsletter").prop("checked", true)
	})

	$('.btn + .create').on('click', function (){
		// whole thing
		if (
			validateEmail($('#email').val()) &&
			validateUsername($('#username').val()) &&
			validatePassword($('#password').val()) &&
			validatePhone($('#phone').val()) &&
			(["M", "F", "O"].indexOf($('#gender').val()) !== -1) &&
			$("#TOS").prop('checked')
			) {
			username = $('#username').val()
			passowrd = $('#password').val()
			$("#registerModal").modal('toggle')
			$("#loginModal").modal('toggle')
		} else {
			console.log("Fail")
		}
		// email
		if (validateEmail($('#email').val())){
			$('#registerModal #email').css({
				'border-width': "1px",
				'border-color': "green"
			})
		} else {
			console.log($('#email').val())
			console.log('email incorrect')
			$('#registerModal #email').css({
				'border-width': "1px",
				'border-color': "red"
			})
		}
		// username
		if (validateUsername($('#username').val())) {
			$('#registerModal #username').css({
				'border-width': "1px",
				'border-color': "green"
			})
		} else {
			console.log('user incorrect')
			$('#registerModal #username').css({
				'border-width': "1px",
				'border-color': "red"
			})
		}
		// password
		if (validatePassword($('#password').val())) {
			$('#registerModal #password').css({
				'border-width': "1px",
				'border-color': "green"
			})
		} else {
			console.log('pass incorrect')
			$('#registerModal #password').css({
				'border-width': "1px",
				'border-color': "red"
			})
		}
		// phone
		if (validatePhone($('#phone').val())) {
			$('#registerModal #phone').css({
				'border-width': "1px",
				'border-color': "green"
			})
		} else {
			console.log('phone incorrect')
			$('#registerModal #phone').css({
				'border-width': "1px",
				'border-color': "red"
			})
		}
	})
})