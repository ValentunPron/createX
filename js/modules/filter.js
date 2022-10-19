function filter() {
	const allItem = document.querySelectorAll('.course-big__item .courses__type'), 
		  marketing = document.querySelectorAll('.course-big__description .marketing'),
		  management = document.querySelectorAll('.course-big__description .management'),
		  recruting = document.querySelectorAll('.course-big__description .recruting'),
		  design = document.querySelectorAll('.course-big__description .design'),
		  development = document.querySelectorAll('.course-big__description .development');
	function numberFilter() {
		document.querySelector('#AllCourse').textContent = `${allItem.length}`;
		document.querySelector('#marketing').textContent = `${marketing.length}`;
		document.querySelector('#management').textContent = `${management.length}`;
		document.querySelector('#recruting').textContent = `${recruting.length}`;
		document.querySelector('#design').textContent = `${design.length}`;
		document.querySelector('#development').textContent = `${development.length}`;
	} 

	function hideCourse() {
		document.querySelectorAll('.course-big__link').forEach(item => {
			item.classList.add('hide');
		})
	}
	
	function showCourse() {
		document.querySelectorAll('.course-big__link').forEach(item => {
			item.classList.remove('hide');
		})
	}

	function hideActiveButton() {
		filterButtuns.forEach(button => {
			button.classList.remove('active');
		})
	} 

	hideCourse();
	showCourse(); 
	numberFilter();
	
	const filterButtuns = document.querySelectorAll('.filter__button');
	filterButtuns.forEach(button => {
		button.addEventListener('click', (e) => {
			hideActiveButton();
			e.target.classList.add('active');
			hideCourse();
			document.querySelectorAll('.course-big__link').forEach(item => {
				if(item.querySelector('.course-big__description .courses__type').classList.contains(button.value)) {
					item.classList.remove('hide');
				} else if (button.value == 'all') {
					showCourse();
				}
			})
		})
	})

	// --- search ---
	const searchInput = document.querySelector('.form__search'),
		  searchButton = document.querySelector('.form__search-button');
	
	searchInput.addEventListener('input' , e => {
		console.log(e.target.value);
		document.querySelectorAll('.course-big__link').forEach(item => {

		})
	})
}

export default filter