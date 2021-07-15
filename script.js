/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	// change theme
	$('#themeBtn').click(function () {
		const root = $(':root');
		const themeIcon = $('#themeIcon');
		const themeWrap = $('#theme');

		if (themeIcon.hasClass('fa-sun')) {
			themeIcon.removeClass('fa-sun').addClass('fa-moon');
			root.attr('data-theme', 'dark');
			themeWrap.css('flex-direction', 'row-reverse');
		} else {
			themeIcon.removeClass('fa-moon').addClass('fa-sun');
			root.attr('data-theme', 'light');
			themeWrap.css('flex-direction', 'row');
		}
	});
});
