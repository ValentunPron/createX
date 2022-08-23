function burger(burgerItem, burgerMenu) {
	$(burgerItem).click((event) => {
		$(`${burgerItem}, ${burgerMenu}`).toggleClass('active');
		$('body').toggleClass('lock')
		document.onkeydown = function(evt) {
			if (evt.keyCode === 27) {
				$(`${burgerItem}, ${burgerMenu}`).removeClass('active');
				$('body').removeClass('lock')
			}
		};
	})
}

export default burger