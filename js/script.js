document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-img');
		} else {
			nav.classList.remove('shadow-img');
		}
	}

	window.addEventListener('scroll', addShadow);
});
