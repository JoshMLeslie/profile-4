import { isMobile as testMobile } from 'is-mobile';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App.tsx';
import AboutComponent from './components/About.tsx';
import BlogLayoutComponent from './components/BlogLayout.tsx';
import HomeComponent from './components/Home.tsx';
import './index.css';

const isMobile = testMobile();
if (isMobile) {
	document.body.classList.add('mobile');
}

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<AboutComponent />} />
				<Route path="about" element={<Navigate to="/" replace />} />
				<Route path="blog/:ref" element={<BlogLayoutComponent />}></Route>
				<Route path="*" element={<HomeComponent />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
