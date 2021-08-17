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
		key: 'mern',
		label: 'MERN Stack',
		title: 'MERN Stack Projects',
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
		key: 'mern',
		img: './assets/projects/dynonary.png',
		projectName: 'Dynonary',
		projectTech: 'ReactJS, MUI, Redux Toolkit, RESTFul API, MERN Stack',
		video: 'https://youtu.be/GDgMBoqIP0g',
		github: 'https://github.com/TuanNguyen2504/dynonary-english',
		liveDemo: 'https://dynonary.herokuapp.com',
	},
	{
		id: '1',
		key: 'mern',
		img: './assets/projects/ttb-store.png',
		projectName: 'TTB Store',
		projectTech: 'ReactJS, AntDesign UI, Redux, Webpack, MERN Stack',
		video: 'https://www.youtube.com/watch?v=upOjXvfoWqE',
		github: 'https://github.com/TuanNguyen2504/ttb-store-project',
		liveDemo: 'https://ttbstorevn.web.app',
	},
	{
		id: '3',
		key: 'sharing',
		img: './assets/projects/dyno-visualizer.png',
		projectName: 'Dyno Visualizer',
		projectTech: 'Algorithms and Data structures, JQuery, SCSS',
		video: null,
		github: 'https://github.com/TuanNguyen2504/dyno-visualizer',
		liveDemo: 'https://tuannguyen2504.github.io/dyno-visualizer/',
	},
	{
		id: '4',
		key: 'sharing',
		img: './assets/projects/js-tips.jpeg',
		projectName: 'JavaScript Tips',
		projectTech: 'JavaScript, Markdown',
		video: null,
		github: 'https://github.com/TuanNguyen2504/javascript-tips',
		liveDemo: null,
	},
	{
		id: '5',
		key: 'sharing',
		img: './assets/projects/vscode-tips.png',
		projectName: 'Visual Code Tips',
		projectTech: 'Markdown, Visual Code',
		video: null,
		github: 'https://github.com/TuanNguyen2504/vscode-tips',
		liveDemo: null,
	},
	{
		id: '6',
		key: 'learning',
		img: './assets/projects/natuspa.png',
		projectName: 'NATUSPA Static Website',
		projectTech: 'HTML, CSS, Jquery',
		video: null,
		github: 'https://github.com/TuanNguyen2504/natuspa-frontend-web',
		liveDemo: 'https://natuspa-beauty-salon.firebaseapp.com/',
	},
	{
		id: '7',
		key: 'mern',
		img: './assets/projects/real-estate.png',
		projectName: 'Real Estate Website',
		projectTech: 'ReactJS, Ant Design UI, ExpressJS, MongoDB',
		video: 'https://youtu.be/AVXS7Yf_HE0',
		github: 'https://github.com/TuanNguyen2504/real-estate-web',
		liveDemo: null,
	},
	{
		id: '8',
		key: 'learning',
		img: './assets/projects/task-management.png',
		projectName: 'Task Management',
		projectTech: 'ReactJS',
		video: null,
		github: 'https://github.com/TuanNguyen2504/reactjs-task-management',
		liveDemo: 'https://tuannguyen2504.github.io/reactjs-task-management/',
	},
	{
		id: '9',
		key: 'learning',
		img: './assets/projects/smash-brick-game.png',
		projectName: 'Smash Bricks Game',
		projectTech: 'JavaScript, HTML5 Canvas',
		video: null,
		github: 'https://github.com/TuanNguyen2504/smash-bricks-game',
		liveDemo: 'https://tuannguyen2504.github.io/smash-bricks-game/',
	},
	{
		id: '10',
		key: 'sharing',
		img: './assets/projects/fireworks.png',
		projectName: 'Fireworks App',
		projectTech: 'JavaScript, HTML5 Canvas',
		video: null,
		github: 'https://github.com/TuanNguyen2504/fireworks-app',
		liveDemo: 'https://tuannguyen2504.github.io/fireworks-app',
	},
	{
		id: '11',
		key: 'mern',
		img: './assets/projects/defast.png',
		projectName: 'Defast - Delivery Hub',
		projectTech: 'ReactJS, ExpressJS, MongoDB, MERN Stack',
		video: 'https://youtu.be/eS7BDvPh0ug',
		github: null,
		liveDemo: 'https://ecus06-defast.herokuapp.com/',
	},
	{
		id: '12',
		key: 'others',
		img: './assets/projects/huffman.png',
		projectName: 'Winzip',
		projectTech: 'C/C++, Algorithm',
		video: 'https://www.youtube.com/watch?v=xPKw52xddXQ',
		github: 'https://github.com/TuanNguyen2504/huffman-coding',
		liveDemo: null,
	},
	{
		id: '13',
		key: 'others',
		img: './assets/projects/chrome-extensions.png',
		projectName: 'Chrome Extension',
		projectTech: 'JavaScript, Chrome API',
		video: null,
		github: 'https://github.com/TuanNguyen2504/chrome-extensions',
		liveDemo: null,
	},
];

const PROJECTS_DETAILS = [
	{
		id: '0',
		title: 'Dynonary - Website For Learning English',
		contentList: [
			{
				label: 'Description',
				content: `With the desire to improve my English ability and everyone else's but not cause boredom. By my website knowledge, I create Dynonary.`,
			},
			{
				label: 'Created',
				content: '12-06-2021',
			},
			{
				label: 'Features',
				content:
					'Sign up, Sign in, Login with Google & Facebook, Account Setting, Search Word, Learn IPA, Flashcard, Dictionary, Play Game, Contribute, Learn Grammar ...',
			},
			{
				label: 'Status',
				content: 'Developing',
			},
			{
				label: 'Frontend Technologies',
				content: 'ReactJS, Material UI, Redux, Redux Toolkit, Axios, SCSS, ...',
			},
			{
				label: 'Backend Technologies',
				content: 'NodeJS, ExpressJS, Mongoose.js, MongoDB, Jwt,...',
			},
			{
				label: 'Hosting, Storage',
				content: 'Heroku, Cloudinary, MongoDB Atlas',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/dynonary-english',
				isLink: true,
			},
			{
				label: 'Live Demo:',
				content: 'https://dynonary.herokuapp.com',
				isLink: true,
			},
		],
	},
	{
		id: '1',
		title: 'TTB Store - Ecommerce Website',
		contentList: [
			{
				label: 'Description',
				content:
					'This is a final project of the subject "Introduction to Software Engineering". Our mission is clone a sales website. And we finished this project in 3 months.',
			},
			{
				label: 'Created',
				content: '06-11-2020',
			},
			{
				label: 'Feature',
				content:
					'Show all product, show product details, search, filter product, cart, sign in, sign up, login with GG, FB, Order (np payment yet), Administrator, user account management',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content:
					'ReactJS, AntDesign UI, Redux, Webpack, RESTFul API with Axios',
			},
			{
				label: 'Backend Technologies',
				content: 'ExpressJS, Mongoose.js, MongoDB, Jwt, Node mailer',
			},
			{
				label: 'Cloud, Storage',
				content: 'Heroku, Firebase, MongoDB Atlas, Cloudinary',
			},
			{
				label: 'Team Size',
				content: '4',
			},
			{
				label: 'Role',
				content: 'Leader, Coder',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/ttb-store-project',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://ttbstorevn.web.app',
				isLink: true,
			},
			{
				label: 'Video Demo',
				content: 'https://www.youtube.com/watch?v=upOjXvfoWqE',
				isLink: true,
			},
		],
	},
	{
		id: '3',
		title: 'Dyno Visualizer Algorithms',
		contentList: [
			{
				label: 'Description',
				content: `With the desire to improve my Algorithms and Data structures ability and everyone else's but not cause boredom. I create Dyno Visualizer website.`,
			},
			{
				label: 'Created',
				content: '23-04-2021',
			},
			{
				label: 'Feature',
				content: 'Sorting Algorithms Visualizer, Sorting Realtime Comparison',
			},
			{
				label: 'Status',
				content: 'Developing',
			},
			{
				label: 'Web Technologies',
				content: 'HTML, JQuery, JS, SCSS, Algorithms and Data structures',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/dyno-visualizer',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://tuannguyen2504.github.io/dyno-visualizer',
				isLink: true,
			},
		],
	},
	{
		id: '4',
		title: 'JavaScript Tips & Tricks',
		contentList: [
			{
				label: 'Description',
				content:
					'This is a collection of JavaScript (ES6+) tips and tricks. Make the code neater. And it seems to be well received by everyone with 91 stars and 39 forks.',
			},
			{
				label: 'Created',
				content: '04-06-2021',
			},
			{
				label: 'Feature',
				content: 'JavaScript ES6+ Syntax',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/javascript-tips',
				isLink: true,
			},
		],
	},
	{
		id: '5',
		title: 'Optimize Visual Code',
		contentList: [
			{
				label: 'Description',
				content:
					'This is my project to share my vscode settings, extensions, tips. It helps people code faster and get inspired to do more',
			},
			{
				label: 'Created',
				content: '08-07-2021',
			},
			{
				label: 'Feature',
				content: 'Settings, Extensions, Tips in Visual Code',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/vscode-tips',
				isLink: true,
			},
		],
	},
	{
		id: '6',
		title: 'Natuspa Static Website',
		contentList: [
			{
				label: 'Description',
				content: 'This is my first project after i learn basic html,css,js',
			},
			{
				label: 'Created',
				content: '04-02-2020',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'HTML, CSS, JQuery, CSS Animation',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/natuspa-frontend-web',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://natuspa-beauty-salon.firebaseapp.com/',
				isLink: true,
			},
		],
	},
	{
		id: '7',
		title: 'Real Estate Website',
		contentList: [
			{
				label: 'Description',
				content:
					'This is my first freelance project and it helps me practice my MERN skills',
			},
			{
				label: 'Created',
				content: '18-12-2020',
			},
			{
				label: 'Feature',
				content:
					'Show real estate products, login, sign up, administrator, account management, ...',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'ReactJS, Ant Design UI, Axios, Redux, SCSS, Atomic CSS',
			},
			{
				label: 'Backend Technologies',
				content: 'NodeJS, ExpressJS, MongoDB, MongooseJS',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/real-estate-web',
				isLink: true,
			},
			{
				label: 'Video Demo',
				content: 'https://youtu.be/AVXS7Yf_HE0',
				isLink: true,
			},
		],
	},
	{
		id: '8',
		title: 'Task Management - ReactJS',
		contentList: [
			{
				label: 'Description',
				content: 'Learn basic ReactJS',
			},
			{
				label: 'Created',
				content: '04-03-2020',
			},
			{
				label: 'Feature',
				content: 'CRUD tasks',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'ReactJS',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/reactjs-task-management',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://tuannguyen2504.github.io/reactjs-task-management/',
				isLink: true,
			},
		],
	},
	{
		id: '9',
		title: 'Smash Bricks Canvas Game',
		contentList: [
			{
				label: 'Description',
				content: 'Learn JavaScript, Canvas HTML5',
			},
			{
				label: 'Created',
				content: '22-10-2019',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'HTML5 Canvas, JavaScript',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/smash-bricks-game',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://tuannguyen2504.github.io/smash-bricks-game',
				isLink: true,
			},
		],
	},
	{
		id: '10',
		title: 'Fireworks App - Canvas JS',
		contentList: [
			{
				label: 'Description',
				content: 'Practice HTML5, JavaScript Canvas',
			},
			{
				label: 'Created',
				content: '20-12-2019',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'HTML5, JavaScript Canvas',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/fireworks-app',
				isLink: true,
			},
			{
				label: 'Live Demo',
				content: 'https://tuannguyen2504.github.io/fireworks-app',
				isLink: true,
			},
		],
	},
	{
		id: '11',
		title: 'Defast - Ecommerce Website',
		contentList: [
			{
				label: 'Description',
				content:
					'Defast is a centralized transportation service, acting as a bridge between customers and delivery service providers to bring benefits to customers, delivery units and bring more business revenue for the corporation.',
			},
			{
				label: 'Created',
				content: '01-05-2021',
			},
			{
				label: 'Feature',
				content:
					'Order, Customer administrator, Delivery Company administrator, Payment with Paypal Sandbox',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Frontend Technologies',
				content: 'ReactJS, Chart.js, Atomic CSS, SCSS, AntDesign UI, Axios',
			},
			{
				label: 'Backend Technologies',
				content: 'ExpressJS, MongoDb, MongooseJS',
			},
			{
				label: 'Cloud, Storage',
				content: 'Cloudinary, Heroku, MongoDB Atlas',
			},
			{
				label: 'Team Size',
				content: '5',
			},
			{
				label: 'Role',
				content: 'Leader, Frontend Dev',
			},
			{
				label: 'Live Demo',
				content: 'https://ecus06-defast.herokuapp.com',
				isLink: true,
			},
			{
				label: 'Video Demo',
				content: 'https://youtu.be/eS7BDvPh0ug',
				isLink: true,
			},
		],
	},
	{
		id: '12',
		title: 'Winzip - Huffman Coding',
		contentList: [
			{
				label: 'Description',
				content:
					'Winzip is a lossless compression application. It uses huffman compression algorithm and run length encoding',
			},
			{
				label: 'Created',
				content: '13-11-2019',
			},
			{
				label: 'Feature',
				content: 'Encode, Decode Files, Folder',
			},
			{
				label: 'Status',
				content: 'Done',
			},
			{
				label: 'Technologies',
				content: 'C++, Huffman Coding Algorithm, RLE Algorithm',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/huffman-coding',
				isLink: true,
			},
			{
				label: 'Video Demo',
				content: 'https://www.youtube.com/watch?v=xPKw52xddXQ',
				isLink: true,
			},
		],
	},
	{
		id: '13',
		title: 'Chrome Extension',
		contentList: [
			{
				label: 'Description',
				content: 'Learn how to build a google chrome extension.',
			},
			{
				label: 'Created',
				content: '05-04-2021',
			},
			{
				label: 'Feature',
				content: 'Highlight Extension',
			},
			{
				label: 'Status',
				content: 'Developing',
			},
			{
				label: 'Technologies',
				content: 'JavaScript, DOM, Chrome APIs',
			},
			{
				label: 'Source Code',
				content: 'https://github.com/TuanNguyen2504/chrome-extensionss',
				isLink: true,
			},
		],
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
			<a class="cur-pointer show-detail" ${DETAIL_KEY}="${id}">
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
	$('.show-detail').click(function () {
		const id = $(this).attr(DETAIL_KEY);
		showProjectDetailDialog(id);
	});
}

function showProjectDetailDialog(id = '') {
	if (!id || id === '') return;

	const project = PROJECTS_DETAILS.find((i) => i.id === id);
	if (!project) return;

	const { contentList, title } = project;

	let xml = '';
	contentList.forEach((item) => {
		xml += `<li class="dialog-content-item">
	<span class="label">${item.label}:&nbsp;</span>
	<span class="content">
		${
			item.isLink
				? `<a class="link" href="${item.content}" target="_blank">${item.content}</a>`
				: item.content
		}
	</span>
</li>`;
	});

	$('#projectDiaglogTitle').text(title);
	$('#projectDialogContent').html(xml);
	$('#overlay').show(250);
	$('#projectDialog').show(250);

	$('#closeDialogBtn').click(() => {
		$('#overlay').hide(350);
		$('#projectDialog').hide(500);
	});
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
