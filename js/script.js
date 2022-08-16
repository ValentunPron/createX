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

	// ---- Modal ----
	function hideModal() {
		$('.benefist__body').each((inxed, item) => {
			item.classList.remove('active');
			$('.benefist__button')[inxed].classList.remove('benefist__button--active')
		})
	}
	function showModal(i = 0) {
		$('.benefist__body')[i].classList.add('active');
		$('.benefist__button')[i].classList.add('benefist__button--active')
	}
	hideModal();
	showModal();

	$('.benefist__button').click(e => {
		console.log(e.currentTarget);
		$('.benefist__button').each((i, btn) => {
			if(e.currentTarget == btn) {
				hideModal();
				showModal(i)
			}
		})
	})
})