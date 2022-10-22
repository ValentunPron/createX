function viewAll(numberCourse = 9) {
	const courseItem = document.querySelectorAll('.course-big__link'),
		  viemAll = document.querySelector('#viem-all');

	function hideCourseItem(start) {
		if (start < courseItem.length) {
			for (let i = start; i < courseItem.length; i++) {
				courseItem[i].classList.add('hide');
			}
		} else {
			viemAll.style.display = 'none';
			showCourseItem();
		}
	}

	function showCourseItem() {
		courseItem.forEach(item => item.classList.remove('hide'));
	}

	let countD = numberCourse;
	hideCourseItem(countD);
	viemAll.addEventListener("click", () => {
		countD += 3;
		showCourseItem();
		hideCourseItem(countD);
	});
}

export default viewAll;
