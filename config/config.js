
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Sagar Rathod",
	links: [],
};
export const intro = {
	title: "Hey, I'm Sagar",
	description:
		"Node.js & backend Developer",
	image: "./50316081.jpeg",
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "require  google doc link",
			isPrimary: false,
		},
	],
};

export const about = {
	title: "Who I am",
	description: [
		"I'm a passionate web developer having an experience of developing Full Stack web applications with Node.js, React.js. I have a strong interest in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
		"I am developing Websites Backend APIs."
	],
};

export const work = {
	title: "What I do",
	isIconify: true,
	cards: [
		{
			title: "node.js & backend Development",
			description:
				"I create REST APIs, Websockets using Node.js",
			icons: [
				"logos:node",
				"logos:react",
				"logos:typescript-icon",
				"logos:mongodb-icon",
				"logos:postgresql-icon",
			],
		},
		{
			title: "UI UX Development",
			description:
				"I create Smart designs for landing page websites",
			icons: [
				"logos:figma"
			],
		},
	],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Developer Portfolio",
			description:
				"Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
			icons: [
				{
					icon: faGlobe,
					link: "https://sagarrathod.github.io",
				},
			],
		},
		{
			title: "salon App",
			description:
				" build API for salon App and also database in postgreSql",
			icons: [
				{
					icon: faGlobe,
					link: "",
				}
			],
		},
		{
			title: "CLI apps",
			description:
			`such as what tasks it can perform, any options or arguments it accepts, and how users can interact with it`,
			icons: [
				{
					icon: faGlobe,
					link: "",
				},
			],
		},
		{
			title: "Banana Talk app",
			description:
				`it is like Minions cartoon languge build in javascript interactive`,
			icons: [
				{
					icon: faGlobe,
					link: "",
				},
			],
		},
		{
			title: "Uber Web",
			description:
				`making UI design clone of uber webapp with all interpolation`,
			icons: [
				{
					icon: faGlobe,
					link: "https://sarvodayasangam.com ",
				},
			],
		},
	],
};

export const contact = {
	title: "Reach Out to me!",
	description:
		"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
	icons: [
		{
			icon: faLinkedin,
			link: "https://www.linkedin.com/in/sagar-rathod-55700823b/",
		},
		{
			icon: faGithub,
			link: "https://github.com/sagarrathod16498",
		},
		{
			icon: faEnvelope,
			link: "mailto:sagarrathod.16498@gmail.com",
		},
	],
};
// SEARCH ENGINE
export const SEO = {
	title: "Sagar Rathod",
	description:
		"A passionate Web Developer",
	author: "Sagar Rathod",
	image: "./50316081.jpeg",
	url: "https://sagarrathod.github.io",
	keywords: [
		"Hanzla",
		"sagar rathod",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Sagar Rathod Portfolio",
	],
};
