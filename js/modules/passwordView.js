function passwordView() {
	$('.password__view').click(event => {
		if( $('.password').attr('type') == 'password') {
			$('.password').attr('type', 'text'); 
		} else {
			$('.password').attr('type', 'password');
		}
	})
}

export default passwordView 