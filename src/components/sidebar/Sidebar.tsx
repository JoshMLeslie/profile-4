import React from 'react';
import { useMobile } from '../../use/use-mobile';
import './sidebar.scss';
import SidebarDesktopComponent from './SidebarDesktopComponent';
import SidebarMobileComponent from './SidebarMobileComponent';


const SidebarComponent: React.FC = () => {
	const isMobile = useMobile();
	return (
		<div id="sidebar-super">
			{isMobile ? <SidebarMobileComponent /> : <SidebarDesktopComponent />}
		</div>
	);
};

export default SidebarComponent;
