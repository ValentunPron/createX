$(document).ready( () => {
	// ---- Burger -----
	$('.header__burger').click((event) => {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
		document.onkeydown = function(evt) {
			if ("key" in evt) {
				$('.header__burger, .header__menu').removeClass('active');
				$('body').removeClass('lock')
			}
		};
	})
	
})