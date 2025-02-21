import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import SidebarDesktopComponent from "./SidebarDesktopComponent";

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
export default SidebarMobileComponent;