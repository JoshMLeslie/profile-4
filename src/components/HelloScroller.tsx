import { useRef } from 'react';
import './hello-scroller.scss';

const HelloScroller: React.FC = () => {
	const elRef = useRef<HTMLDivElement | null>(null);

	const toggleAnimate = () => {
		elRef.current!.style.animationPlayState =
			elRef.current!.style.animationPlayState === 'paused'
				? 'running'
				: 'paused';
	};
	return (
		<div id="hello-scroller-container">
			<button id="hello-text-super" type="button" onClick={toggleAnimate}>
				<div id="hello-text-container" ref={elRef} translate="no">
					<h1>Hello and welcome!</h1>
					<h1>Përshëndetje dhe mirëseardhje!</h1>
					<h1>مرحباً بكم!</h1>
					<h1>您好，欢迎光临</h1>
					<h1>Dobrý den a vítejte!</h1>
					<h1>Hej og velkommen!</h1>
					<h1>Hallo en welkom!</h1>
					<h1>Bonjour et bienvenue!</h1>
					<h1>Hallo und herzlich willkommen!</h1>
					<h1>Γεια σας και καλωσορίσατε!</h1>
					<h1>Aloha a ho'okipa!</h1>
					<h1>!שלום וברוכים הבאים</h1>
					<h1>हैलो और स्वागत है!</h1>
					<h1>Halo dan selamat datang!</h1>
					<h1>Ciao e benvenuti!</h1>
					<h1>こんにちは、ようこそ！</h1>
					<h1>안녕하세요, 환영합니다!</h1>
					<h1>Hei og velkommen!</h1>
					<h1>Witam i zapraszam!</h1>
					<h1>Olá e bem-vindo!</h1>
					<h1>Здравствуйте и добро пожаловать!</h1>
					<h1>¡Hola y bienvenido!</h1>
					<h1>Habari na karibu!</h1>
					<h1>Hej och välkommen!</h1>
					<h1>Merhaba ve hoş geldiniz!</h1>
				</div>
			</button>
			<label htmlFor="hello-text-super">
				<span>Machine translations. Click to pause.</span>
			</label>
		</div>
	);
};
export default HelloScroller;
