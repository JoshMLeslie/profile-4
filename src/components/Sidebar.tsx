import React from 'react';
import { Link } from 'react-router';
import './sidebar.scss';

const SidebarComponent: React.FC = () => {
	return (
		<div id="sidebar-container">
			<header>
				<h1>Josh M Leslie</h1>
				<h2>
					<a href="tel:+12037671098">203.767.1098</a>
				</h2>
			</header>
			<div id="link-container">
				<Link to="/about">About</Link>
				<Link to="/github">Github</Link>
			</div>
		</div>
	);
};

export default SidebarComponent;
