function module() {
	$('.header__login').click((event) => {
		$('.sign').toggleClass('active');
		$('body').toggleClass('lock')
		document.onkeydown = function(evt) {
			if (evt.keyCode === 27) {
				$('.sign').removeClass('active');
				$('body').removeClass('lock')
			}
		};
		$('.sign__close').click(event => {
			$('.sign').removeClass('active');
			$('body').removeClass('lock')
		})
		$('.sign').click(event => {
			if(event.target == document.querySelector('.sign__body')) {
				$('.sign').removeClass('active');
				$('body').removeClass('lock')
			}
		})
	})
	$('#sign-up').click((event) => {
		$('.sign').removeClass('active');
		$('.sign-up').toggleClass('active');
		$('body').toggleClass('lock');
		document.onkeydown = function(evt) {
			if (evt.keyCode === 27) {
				$('.sign-up').removeClass('active');
				$('body').removeClass('lock')
			}
		};
		$('.sign__close').click(event => {
			$('.sign-up').removeClass('active');
			$('body').removeClass('lock')
		})
		$('.sign-up').click(event => {
			if(event.target == document.querySelector('.sign-up .sign__body')) {
				$('.sign-up').removeClass('active');
				$('body').removeClass('lock')
			}
		})
	})

	$('#sign-in').click(event => {
		$('.sign-up').removeClass('active');
		$('.sign').toggleClass('active');
		$('body').toggleClass('lock');
		document.onkeydown = function(evt) {
			if (evt.keyCode === 27) {
				$('.sign').removeClass('active');
				$('body').removeClass('lock')
			}
		};
		$('.sign__close').click(event => {
			$('.sign').removeClass('active');
			$('body').removeClass('lock')
		})
		$('.sign').click(event => {
			if(event.target == document.querySelector('.sign__body')) {
				$('.sign').removeClass('active');
				$('body').removeClass('lock')
			}
		})
	})

	console.log($('password').attr('type'))
	$('.password__view').click(event => {
		if( $('.password').attr('type') == 'password') {
			$('.password').attr('type', 'text'); 
		} else {
			$('.password').attr('type', 'password');
		}
	})
}

export default module

