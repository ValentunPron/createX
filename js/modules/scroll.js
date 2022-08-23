function scroll(button, selection) {
	$(button).click(() => {
		$('html, body').animate({
			scrollTop: $(selection).offset().top
		}, 2000);
	})
}

export default scroll