import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App.tsx';
import AboutComponent from './components/About.tsx';
import HomeComponent from './components/Home.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<AboutComponent />} />
				<Route path="about" element={<Navigate to="/" replace />} />
				<Route path="*" element={<HomeComponent />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
