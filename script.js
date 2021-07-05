/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	// change theme
	$('#themeBtn').click(function () {
		const root = $(':root');
		if ($(this).hasClass('fa-sun')) {
			$(this).removeClass('fa-sun').addClass('fa-moon');
			root.attr('data-theme', 'light');
		} else {
			$(this).removeClass('fa-moon').addClass('fa-sun');
			root.attr('data-theme', 'dark');
		}
	});
});
