import burger from './modules/burger';
import module from './modules/module';
import tabs from './modules/tabs';
import slider from './modules/slider';
import scroll from './modules/scroll'

$(document).ready( () => {
	burger('.header__burger', '.header__menu');
	tabs('.benefist__body', '.benefist__button', 'benefist__button--active');
	slider('.team__list', '.team__slick-next', '.team__slick-prev', '.team__arrow', 'active', 'none');
	slider('.reviews__list', '.reviews__slick-next', '.reviews__slick-prev', 'none', '.reviews__dots');
	scroll('.footer__bottom-button', '.header');
	module();
})
