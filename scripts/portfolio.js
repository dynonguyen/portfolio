/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const OPTIONS = [
	{
		key: 'all',
		label: 'All',
		title: 'All Projects',
	},
	{
		key: 'pet-project',
		label: 'Pet Projects',
		title: 'Pet Projects',
	},
	{
		key: 'learning',
		label: 'Learning',
		title: 'Projects For Learning',
	},
	{
		key: 'sharing',
		label: 'Sharing',
		title: 'Projects For Sharing',
	},
	{
		key: 'others',
		label: 'Others',
		title: 'Other Projects',
	},
];

let currentOptionKey = OPTIONS[0].key;

function renderOptions() {
	let xml = '';

	OPTIONS.forEach((item) => {
		xml += `<li data-key="${item.key}" class="portfolio-menu-option ${
			item.key === currentOptionKey ? 'active' : ''
		}">${item.label}</li>`;
	});

	$('#portfolioMenu').html(xml);
}

$(document).ready(function () {
	renderOptions();

	// option click
	$('.portfolio-menu-option').click(function () {
		if ($(this).hasClass('active')) {
			return;
		}

		// change active menu item
		currentOptionKey = $(this).attr('data-key');
		$('.portfolio-menu-option.active').removeClass('active');
		$(this).addClass('active');

		// change menu title
		const newLabel = OPTIONS.find((i) => i.key === currentOptionKey).title;

		$('#portfolioMenuLabel').text(newLabel);
	});
});
