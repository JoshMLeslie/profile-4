import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import LinkSectionatorData from '../../public/sidebar-data.json';
import { useMobile } from '../use/use-mobile';
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

interface ListSectionContent {
	dateText: string;
	name: string;
	url: string;
}
interface ListSection {
	children: Array<ListSectionContent>;
	sectionTitle: string;
	initCollapsed?: boolean;
}

const ListSectionatorLink: React.FC<ListSectionContent> = ({
	dateText,
	name,
	url,
}) => {
	return (
		<Link to={url}>
			<div className="title-year">
				<span>{name}</span>
				<span className="date-text">{dateText}</span>
			</div>
		</Link>
	);
};
const ListSectionator: React.FC<ListSection> = ({
	sectionTitle,
	initCollapsed,
	children,
}) => {
	return (
		<section>
			<CollapseListComponent
				initCollapsed={initCollapsed}
				title={<h3>{sectionTitle}</h3>}
				children={
					<div className="link-section-links">
						{children.map((child) => {
							return (
								<ListSectionatorLink
									key={`${sectionTitle}-${child.name}`}
									{...child}
								/>
							);
						})}
					</div>
				}
			/>
		</section>
	);
};

const SidebarDesktopComponent: React.FC = () => {
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
				{LinkSectionatorData.map((sectionData) => (
					<ListSectionator key={sectionData.sectionTitle} {...sectionData} />
				))}
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

const SidebarMobileComponent: React.FC = () => {
	const location = useLocation();
	const [viewState, setViewState] = useState('open');
	const openRef = useRef<null | HTMLButtonElement>(null);

	useEffect(() => {
		if (location && location.pathname !== '/') {
			// since the routing for 'about' is a redirect from 'about' to '/' this still closes nicely
			setViewState('close');
		}
	}, [location]);

	const handleOpenClick = () => {
		openRef.current!.classList.add('click');
		setTimeout(() => {
			setViewState('open');
			openRef.current!.classList.remove('click');
		}, 300);
	};

	return (
		<div id="sidebar-mobile-container" className={viewState}>
			<button ref={openRef} id="open-button" onClick={handleOpenClick}>
				Nav
			</button>
			<SidebarDesktopComponent />
			<footer>
				<button onClick={() => setViewState('close')}>Hide</button>
			</footer>
		</div>
	);
};

const SidebarComponent: React.FC = () => {
	const isMobile = useMobile();
	return (
		<div id="sidebar-super">
			{isMobile ? <SidebarMobileComponent /> : <SidebarDesktopComponent />}
		</div>
	);
};

export default SidebarComponent;
