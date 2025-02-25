import { isMobile as testMobile } from 'is-mobile';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App.tsx';
import AboutComponent from './components/About.tsx';
import BlogLayoutComponent from './components/BlogLayout.tsx';
import CalendarComponent from './components/Calendar.tsx';
import HomeComponent from './components/Home.tsx';
import ResumeComponent from './components/Resume.tsx';
import './index.css';

// DEV Clear console on hot reloading
if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    console.clear
  );
}
// end DEV

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
				<Route path="calendar" element={<CalendarComponent />} />
				<Route path="resume" element={<ResumeComponent />} />
				<Route path="blog/:blogName" element={<BlogLayoutComponent />}></Route>
				<Route path="*" element={<HomeComponent />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
