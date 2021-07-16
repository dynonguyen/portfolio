/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const LS_THEME_KEY = 'theme';
let currentLink = 'about';

// get theme in local storage
function getTheme() {
	const theme = localStorage.getItem(LS_THEME_KEY);
	const themeIcon = $('#themeIcon');
	const themeWrap = $('#theme');

	if (theme && theme === 'dark') {
		$(':root').attr('data-theme', 'dark');
		themeIcon.removeClass('fa-sun').addClass('fa-moon');
		themeWrap.css('flex-direction', 'row-reverse');
	} else {
		$(':root').attr('data-theme', 'light');
		themeIcon.removeClass('fa-moon').addClass('fa-sun');
		themeWrap.css('flex-direction', 'row');
	}
}

// get initial component
function getComponent(link = 'home') {
	// remove current
	$(`.nav-link[data-link=${currentLink}]`).removeClass('active');
	$(`.nav-link[data-link=${link}]`).addClass('active');

	// add new component
	$(`#${currentLink}`).fadeOut(750).css('display', 'none');
	$(`#${link}`).fadeIn(750);
	currentLink = link;
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

	// get home
	getComponent(currentLink);

	// link & render component
	$('.nav-link').click(function () {
		const link = $(this).attr('data-link');
		getComponent(link);
	});
});
