import burger from './modules/burger';
import module from './modules/module';
import tabs from './modules/tabs';
import slider from './modules/slider';
import scroll from './modules/scroll';
import passwordView from './modules/passwordView';
import filter from './modules/filter';
import viemAll from './modules/viewAll';

$(document).ready( () => {
	// Burger
	if(document.querySelector('.header__burger')) {
		burger('.header__burger', '.header__menu');
	}
	// ---- Sing up
	module('.header__login', '.sign', '.sign__body', '.sign__close');
	module('.sing-up__link', '.sign-up', '.sign-up .sign__body', '.sign__close');
	module('.sing-in__link', '.sign', '.sign__body', '.sign__close');
	passwordView();
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
	// ---- Course page
	let step = 9;
	if(document.querySelector('.filter__list')) {
		filter(step);
	}
	if(document.querySelector('.filter__list')) {
		viemAll(step);
	}
})

