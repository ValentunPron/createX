function burger(burgerItem, burgerMenu) {
	$(burgerItem).click((event) => {
		$(`${burgerItem}, ${burgerMenu}`).toggleClass('active');
		$('body').toggleClass('lock')
		document.onkeydown = function(evt) {
			if ("key" in evt) {
				$(`${burgerItem}, ${burgerMenu}`).removeClass('active');
				$('body').removeClass('lock')
			}
		};
	})
}

export default burger