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

	// Slider 

	// Team 
	$('.team__list').slick({
		prevArrow: $('.team__slick-prev'),
		nextArrow: $('.team__slick-next'),
		appendArrows: '.team__arrow',
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: false
	  });

	  // reviews 
	  $('.reviews__list').slick({
		prevArrow: $('.reviews__slick-prev'),
		nextArrow: $('.reviews__slick-next'),
		dots: true,
		appendDots:$('.reviews__dots'),
		autoplay: true,
		autoplaySpeed: 12000,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 500
	  });
})