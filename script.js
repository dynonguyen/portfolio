/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const LS_THEME_KEY = 'theme';

// get theme in local storage
function getTheme() {
	const theme = localStorage.getItem(LS_THEME_KEY);
	if (theme && theme === 'dark') {
		$(':root').attr('data-theme', 'dark');
	} else {
		$(':root').attr('data-theme', 'light');
	}
}

$(document).ready(function () {
	// get theme
	getTheme();

	// change theme
	$('#themeBtn').click(function () {
		const root = $(':root');
		const themeIcon = $('#themeIcon');
		const themeWrap = $('#theme');

		if (themeIcon.hasClass('fa-sun')) {
			themeIcon.removeClass('fa-sun').addClass('fa-moon');
			themeWrap.css('flex-direction', 'row-reverse');
			root.attr('data-theme', 'dark');
			localStorage.setItem(LS_THEME_KEY, 'dark');
		} else {
			themeIcon.removeClass('fa-moon').addClass('fa-sun');
			themeWrap.css('flex-direction', 'row');
			root.attr('data-theme', 'light');
			localStorage.setItem(LS_THEME_KEY, 'light');
		}
	});
});
