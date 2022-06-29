const INTRODUCES = [
	"🤵 I'm a Computer Science and Engineering Student (Information System) at the HCMUS.",
	'👨‍💻 I’m currently working on web development technologies like JavaScript, TypeScript, ReactJS, NextJS, MERN Stack etc.',
	'🎯 Future Goals: Learning to become a full-stack developer.',
	'⚡ Fun facts: Open and friendly, I love to the play guitar & code.',
];

const SKILLS = [
	{
		label: 'Front-end Technologies',
		content:
			'ReactJS, NextJS, HTML5, CSS3, SCSS, Styled Component, Redux, Jquery.',
	},
	{
		label: 'Back-end Technologies',
		content:
			'NodeJS (ExpressJS), RESTful API, GraphQL, Pug Engine, MongoDB, MySQL.',
	},
	{
		label: 'Development / Teamwork Tools',
		content: 'Git, Docker, Slack, Trello, Notion, Vim, VSCode.',
	},
	{
		label: 'Others',
		content:
			'Basic design skill with Photoshop, Illustrator, design SQL Database.',
	},
];

function renderIntroduces() {
	let xml = '<p class="label">Overview</p>';
	INTRODUCES.forEach(item => {
		xml += `<li class="about-intro-item">${item}</li>`;
	});
	$('#aboutIntro').html(xml);
}

function renderSkills() {
	let xml = '';
	SKILLS.forEach(skill => {
		xml += `<li class="about-skill-item"><p class="label">${skill.label}</p><p class="content">${skill.content}</p></li>`;
	});
	$('#aboutSkill').html(xml);
}

$(document).ready(function () {
	renderIntroduces();
	renderSkills();
});
