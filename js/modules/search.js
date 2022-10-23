// --- search ---
function search() {
	const searchInput = document.querySelector('.form__search'),
		  searchButton = document.querySelector('.form__search-button'),
		  notFound = document.querySelector('.not-found__block');
	
	searchInput.addEventListener('input' , e => {
		let searchText = e.target.value;
		let notFoundStatus = true;
		document.querySelector('#viem-all').style.display = 'none';
		searchButton.addEventListener('click', e => {
			e.preventDefault();
			hideCourse();
			document.querySelectorAll('.course-big__link').forEach(item => {
				if(item.querySelector('.course-big__item .courses__type').textContent.toLocaleLowerCase() === searchText.toLocaleLowerCase()) {
					item.classList.remove('hide');
					notFound.innerHTML = ' ';
					notFoundStatus = false;
				} else if (item.querySelector('.course-big__item .courses__title').textContent.toLocaleLowerCase() === searchText.toLocaleLowerCase()) {
					item.classList.remove('hide');
					notFound.innerHTML = ' ';
					notFoundStatus = false;
				} 
				else if (notFoundStatus){
					notFound.innerHTML = '<h2 class="not-found">Not found :(</h2>'
				}
			})
		})
	})
}

export default search;