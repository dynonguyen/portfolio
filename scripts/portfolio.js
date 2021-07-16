/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const DATA_KEY = 'data-key';
const DETAIL_KEY = 'data-id';

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

const PROJECTS = [
	{
		id: '0',
		key: 'pet-project',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: 'https://www.youtube.com/watch?v=KRMWzbuh-Vw',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '1',
		key: 'pet-project',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: 'https://www.youtube.com/watch?v=KRMWzbuh-Vw',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '2',
		key: 'pet-project',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: 'https://www.youtube.com/watch?v=KRMWzbuh-Vw',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '3',
		key: 'pet-project',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: 'https://www.youtube.com/watch?v=KRMWzbuh-Vw',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '3',
		key: 'learning',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: null,
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '4',
		key: 'learning',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: null,
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: null,
	},
	{
		id: '5',
		key: 'sharing',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: '',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: null,
	},
	{
		id: '6',
		key: 'others',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: '',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: null,
	},
	{
		id: '7',
		key: 'others',
		img: 'https://picsum.photos/350/350',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, ExpressJS, RESTFul API',
		video: '',
		github: 'https://github.com/TuanNguyen2504/portfolio',
		liveDemo: null,
	},
];

let currentOptionKey = OPTIONS[0].key;

function renderOptions() {
	let xml = '';

	OPTIONS.forEach((item) => {
		xml += `<li ${DATA_KEY}="${item.key}" class="portfolio-menu-option ${
			item.key === currentOptionKey ? 'active' : ''
		}">${item.label}</li>`;
	});

	$('#portfolioMenu').html(xml);
}

function renderProject(projects = []) {
	let xml = '';
	projects.forEach((project) => {
		const { id, key, img, projectName, projectTech, video, github, liveDemo } =
			project;

		xml += `<li class="portfolio-item">
	<img src="${img}" alt="Portfolio Photo" />
	<div class="portfolio-item-detail">
		<h2 class="project-name">${projectName}</h2>
		<p class="project-tech">${projectTech}</p>
		<div class="d-flex">
			<a class="cur-pointer" ${DETAIL_KEY}="${id}">
				<i class="fas fa-info-circle project-icon"></i>
			</a>
			${
				video && video !== ''
					? `<a href="${video}" target="_blank">
							<i	i class="fas fa-play-circle project-icon"></i>
						</a>`
					: ''
			}
			${
				github && github !== ''
					? `	<a href="${github}" target="_blank">
								<i class="fab fa-github project-icon"></i>
						</a>`
					: ''
			}
		${
			liveDemo && liveDemo !== ''
				? `<a href="${liveDemo}" target="_blank">
					<i class="fas fa-eye project-icon"></i>
				</a>`
				: ''
		}
			
		</div>
	</div>
</li>`;
	});

	$('#portfolioList').fadeOut().html(xml).fadeIn(350);
}

$(document).ready(function () {
	renderOptions();

	// render init all projects
	renderProject(PROJECTS);

	// filter project
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

		// filter
		if (currentOptionKey === 'all') {
			renderProject(PROJECTS);
		} else {
			const filtered = PROJECTS.filter((i) => i.key === currentOptionKey);
			renderProject(filtered);
		}
	});
});
