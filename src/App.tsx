import { Outlet } from 'react-router';
import './App.css';
import SidebarComponent from './components/Sidebar';

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
