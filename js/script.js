import burger from './modules/burger';
import module from './modules/module';
import tabs from './modules/tabs';
import slider from './modules/slider';
import scroll from './modules/scroll';
import passwordView from './modules/passwordView';
import filter from './modules/filter';

$(document).ready( () => {
	// Burger
	if(document.querySelector('.header__burger')) {
		burger('.header__burger', '.header__menu');
	}
	//-----
	// Scroll 
	if(document.querySelector('.benefist__body')) {
		tabs('.benefist__body', '.benefist__button', 'benefist__button--active');
	}
	if(document.querySelector('.team__list')) {
		slider('.team__list', '.team__slick-next', '.team__slick-prev', '.team__arrow', 'active', 'none');
	}
	if(document.querySelector('.reviews__list')) {
		slider('.reviews__list', '.reviews__slick-next', '.reviews__slick-prev', 'none', '.reviews__dots');
	}
	if(document.querySelector('.footer__bottom-button')) {
		scroll('.footer__bottom-button', '.header');
	}
	//-----
	module('.header__login', '.sign', '.sign__body', '.sign__close');
	module('#sign-up', '.sign-up', '.sign-up .sign__body', '.sign__close');
	module('#sign-in', '.sign', '.sign__body', '.sign__close');
	passwordView();
	filter();
})

