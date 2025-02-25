import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import './App.scss';
import SidebarComponent from './components/sidebar/Sidebar';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const redirectPath = sessionStorage.getItem('redirectFromExternal');
		if (redirectPath) {
			sessionStorage.removeItem('redirectFromExternal');
			navigate(redirectPath, {replace: true});
		}
	}, [navigate]);

	return (
		<div id="app-container">
			<SidebarComponent />
			<div id="app-outlet">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
