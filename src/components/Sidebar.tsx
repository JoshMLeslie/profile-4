import React from 'react';
import { Link } from 'react-router';
import CollapseListComponent from './CollapseList';
import './sidebar.scss';

const externalLinks = [
	{
		name: 'Github',
		link: 'https://www.github.com/joshmleslie',
		imgLink: '/src/assets/github-logo.svg',
	},
	{
		name: 'Gitlab',
		link: 'https://www.gitlab.com/joshmleslie',
		imgLink: '/src/assets/gitlab-logo.svg',
	},
	{
		name: 'StackOverflow',
		link: 'https://stackoverflow.com/users/9807140/josh-leslie',
		imgLink: '/src/assets/stackoverflow-logo.svg',
	},
	{
		name: 'StackBlitz',
		link: 'https://stackblitz.com/@JoshMLeslie/collections/coherent',
		imgLink: '/src/assets/stackblitz-logo.svg',
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/joshmleslie',
		imgLink: '/src/assets/linkedin-logo.svg',
	},
];

const ExternalLink: React.FC<{
	link: string;
	name: string;
	imgLink?: string;
}> = ({imgLink, link, name}) => (
	<a href={link} target="_blank" rel="nofollow noopener">
		{imgLink && <img className="icon" src={imgLink} />}
		<span>{name}</span>
	</a>
);

const SidebarComponent: React.FC = () => {
	return (
		<div id="sidebar-container">
			<header>
				<h1>Josh M Leslie</h1>
				<h2>
					<a href="tel:+12037671098">203.767.1098</a>
				</h2>
				<h2>
					<a href="mailto:dm@joshmleslie.com">dm@joshmleslie.com</a>
				</h2>
			</header>
			<div id="link-container">
				<Link to="/about">About</Link>
				<Link to="/resume">Resume</Link>
				<section>
					<CollapseListComponent
						initCollapsed={false}
						title={<h3>Jobs</h3>}
						children={
							<div className="link-section-links">
								<Link to="/blog/adp">
									<div className="title-year">
										<span>ADP</span>
										<span>2019.06 + 06</span>
									</div>
								</Link>
								<Link to="/blog/ny-fed">
									<div className="title-year">
										<span>Fed. Reserve</span>
										<span>2020.01 + 12</span>
									</div>
								</Link>
								<Link to="/blog/osms">
									<div className="title-year">
										<span>OSMS</span>
										<span>2020.03 + 12</span>
									</div>
								</Link>
								<Link to="/blog/dynepic">
									<div className="title-year">
										<span>Dynepic</span>
										<span>2020.11 + 12</span>
									</div>
								</Link>
								<Link to="/blog/dynepic">
									<div className="title-year">
										<span>Gather Flora</span>
										<span>2021.01 + 01</span>
									</div>
								</Link>
								<Link to="/blog/fashionphile">
									<div className="title-year">
										<span>Fashionphile</span>
										<span>2022.01 + 18</span>
									</div>
								</Link>
							</div>
						}
					/>
				</section>
				<section>
					<CollapseListComponent
						initCollapsed={false}
						title={<h3>Case Studies</h3>}
						children={<div className="link-section-links">WIP</div>}
					/>
				</section>
				<section>
					<CollapseListComponent
						title={<h3>Volunteering</h3>}
						children={
							<div className="link-section-links">
								<Link to="/pcw">PCW</Link>
								<Link to="/pwl">Punks With Lunch</Link>
								<Link to="/amt">Ace Makerspace</Link>
								<Link to="/osms">OSMS</Link>
							</div>
						}
					/>
				</section>
				<section>
					<CollapseListComponent
						title={
							<div>
								<h3>External Links</h3>
								<p>Opens a new tab</p>
							</div>
						}
						children={
							<div className="link-section-links">
								{externalLinks.map((datum) => (
									<ExternalLink key={datum.name} {...datum} />
								))}
							</div>
						}
					/>
				</section>
			</div>
		</div>
	);
};

export default SidebarComponent;
