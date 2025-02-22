import { Outlet } from 'react-router';
import './App.scss';
import SidebarComponent from './components/sidebar/Sidebar';

function App() {
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
