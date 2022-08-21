function tabs(parentSelector, button, active = 'active') {
	function hideTab() {
		$(parentSelector).each((index, item) => {
			item.classList.remove('active');
			$(button)[index].classList.remove(active);
		})
	}
	function showTab(i = 0) {
		$(parentSelector)[i].classList.add('active');
		$(button)[i].classList.add(active)
	}
	hideTab();
	showTab();

	$(button).click(e => {
		$(button).each((i, btn) => {
			if(e.currentTarget == btn) {
				hideTab();
				showTab(i)
			}
		})
	})
}

export default tabs;