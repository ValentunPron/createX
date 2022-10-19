function module(button, window, windowBody, buttonClose) {
	$(button).click((event) => {
		$('.sign').removeClass('active');
		$('.sign-up').removeClass('active');
		$(window).toggleClass('active');
		$('body').toggleClass('lock')
		document.onkeydown = function(evt) {
			if (evt.keyCode === 27) {
				$(window).removeClass('active');
				$('body').removeClass('lock')
			}
		};
		$(buttonClose).click(event => {
			$(window).removeClass('active');
			$('body').removeClass('lock')
		})
		$(window).click(event => {
			if(event.target == document.querySelector(windowBody)) {
				$(window).removeClass('active');
				$('body').removeClass('lock')
			}
		})
	})
}

export default module

