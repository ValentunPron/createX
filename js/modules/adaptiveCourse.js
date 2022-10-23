import viewAll from "./viewAll";
import filter from "./filter";

function adaptiveCourse() {
	let step = 9;
	if(window.innerWidth > 769) {
		if(document.querySelector('.filter__list')) {
			filter(step);
		}
		if(document.querySelector('.filter__list')) {
			viewAll(step);
		}
	} else if (window.innerWidth <= 769 && window.innerWidth >= 400) {
		step = 6;
		if(document.querySelector('.filter__list')) {
			filter(step);
		}
		if(document.querySelector('.filter__list')) {
			viewAll(step);
		}
	} else {
		step = 3;
		if(document.querySelector('.filter__list')) {
			filter(step);
		}
		if(document.querySelector('.filter__list')) {
			viewAll(step);
		}
	}
}

export default adaptiveCourse;