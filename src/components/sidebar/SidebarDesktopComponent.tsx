import { Link } from 'react-router';
import ListSectionatorData from '../../data/sidebar/sidebar-data.json';
import ExternalLinkData from '../../data/sidebar/sidebar-external-links.json';
import CollapseListComponent from '../CollapseList';
import { ExternalLink, ListSectionator } from './util';

const SidebarDesktopComponent: React.FC = () => {
	return (
		<div id="sidebar-container">
			<header>
				<h1>Josh M Leslie</h1>
				<h2>
					<a href="tel:+12037671098">203.767.1098</a>
				</h2>
				<h2>
					<a href="mailto:hello@joshmleslie.com">hello@joshmleslie.com</a>
				</h2>
			</header>
			<div id="link-container">
				<Link to="/about">About</Link>
				<Link to="/resume">Resume</Link>
				{ListSectionatorData.map((sectionData) => (
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
								{ExternalLinkData.map((datum) => (
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
export default SidebarDesktopComponent;
