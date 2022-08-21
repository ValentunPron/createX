
function slider(parentSelector, arrowNext, arrowPrev, arrowSelector, adaptive = 'none', dots = 'none') {
	if(adaptive == 'active') {
		if(document.documentElement.clientWidth > 768) {
			$(parentSelector).slick(
				{
				prevArrow: $(arrowPrev),
				nextArrow: $(arrowNext),
				appendArrows: arrowSelector,
				slidesToShow: 4,
				slidesToScroll: 1,
				variableWidth: false
			  });
		} else if(document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 500) {
			$(parentSelector).slick(
				{
				prevArrow: $(arrowPrev),
				nextArrow: $(arrowNext),
				appendArrows: arrowSelector,
				slidesToShow: 3,
				slidesToScroll: 1,
			  });
		} else {
			$(parentSelector).slick(
				{
				prevArrow: $(arrowPrev),
				nextArrow: $(arrowNext),
				appendArrows: arrowSelector,
				slidesToShow: 2,
				slidesToScroll: 1,
			  });
		}
	} else {
		$(parentSelector).slick({
			prevArrow: $(arrowPrev),
			nextArrow: $(arrowNext),
			dots: true,
			appendDots:$('.reviews__dots'),
			autoplay: true,
			autoplaySpeed: 12000,
			pauseOnFocus: false,
			pauseOnHover: false,
			speed: 500
		  });
	}
}

export default slider