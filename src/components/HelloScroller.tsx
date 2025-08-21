import { useRef, useState } from 'react';
import './hello-scroller.scss';

const ROW_HEIGHT = 48;

const getElAnimation = (el?: HTMLElement | null) => el?.getAnimations()?.[0];

const parseTransformY = (keyFrameTransform: string) => {
	const match = keyFrameTransform?.match(/translateY\((-?\d+(?:\.\d+)?)px\)/);
	return match ? parseFloat(match[1]) : 0;
};

const getCurrentIterationPercent = (currentY: number, animRef: Animation) => {
	const effect = animRef?.effect as KeyframeEffect | null;
	if (!effect) return 0;

	const keyframes = effect.getKeyframes();
	if (!keyframes?.length) {
		console.warn('Keyframes empty');
		return 0;
	}
	const startYTransform = keyframes[0].transform;
	const endYTransform = keyframes[keyframes.length - 1].transform;
	const startY = parseTransformY(`${startYTransform}`);
	const endY = parseTransformY(`${endYTransform}`);

	if (endY === startY) {
		return 0;
	}

	console.log(animRef.currentTime, animRef.effect?.getTiming().duration);

	const iteration = 0; // Math.floor(
	// 	animRef.currentTime! / animRef.effect!.getTiming().duration!
	// );

	const isReverse = !!(
		animRef.effect?.getTiming().direction === 'alternate' && iteration % 2 === 1
	);

	if (isReverse) {
		return (endY - currentY) / (endY - startY);
	} else {
		return (currentY - startY) / (endY - startY);
	}
};

// Get current computed transform value
const getElCurrentY = (el?: HTMLElement | null) => {
	if (!el) return 0;
	const computedTransform = el
		.computedStyleMap()
		.get('transform') as CSSTransformValue;

	if (!computedTransform?.length) {
		console.warn("couldn't retrieve HelloScroller computed transform");
		return 0;
	}
	const computedTranslate = computedTransform?.[0] as CSSTranslate;

	if (!computedTranslate) {
		console.warn("couldn't retrieve HelloScroller computed translate");
		return 0;
	}

	const currentY = (computedTranslate?.y as CSSUnitValue)?.value;

	if (currentY === undefined) {
		console.warn('currentY transform is undefined?');
		return 0;
	}

	// The GPU compositor will always give small thousandth-level deviations. To align, round currentY to 1000s
	return Math.round(currentY * 1000) / 1000;
};

// rebuild keyeffect with offset start
// startPercent should be max of 0.5 which is animation 'end' / mid-point / switch-back point since we go 0-> 0.5 and use 0.51 -> 1 for the reverse as the 'bounce' effect flips
const resetKeyframeEffect = (startPercent: number, animRef?: Animation) => {
	if (!animRef) {
		console.warn('Failed attempt to access animRef');
		return;
	}

	const effect = animRef.effect! as KeyframeEffect;
	animRef.effect = new KeyframeEffect(effect.target, effect.getKeyframes(), {
		...effect.getComputedTiming(),
		iterationStart: startPercent,
	});
};

const HelloScroller: React.FC = () => {
	const elRef = useRef<HTMLDivElement | null>(null);
	const animRef = useRef<Animation>(getElAnimation(elRef?.current));
	const [computedStyle, setComputedStyle] = useState<Record<string, string>>(
		{}
	);
	const [playState, setPlayState] = useState<'paused' | 'running'>('running');

	const snapToNearestRow = () => {
		const element = elRef.current;
		if (!element) return;

		const currentY = getElCurrentY(element);
		const rowOffset = Math.abs(currentY % ROW_HEIGHT);
		const targetY = currentY + rowOffset;

		animRef.current?.cancel();
		console.log(currentY, targetY)
		const animation = element.animate(
			[
				{transform: `translateY(${currentY}px)`},
				{transform: `translateY(${targetY}px)`},
			],
			{duration: 2500, easing: 'ease-in-out'}
		);
		animation.addEventListener('finish', () => {
			console.debug('animation resetting');
			setComputedStyle({
				transform: `translateY(${targetY}px) !important`,
				animation: 'slide-hello 45s infinite paused',
			});
		});
	};

	const resumeAnimation = () => {
		const element = elRef.current;
		if (!element) return;

		setComputedStyle({});

		resetKeyframeEffect(0, animRef?.current);
		animRef.current?.play();
	};

	const toggleAnimate = () => {
		const el = elRef.current;
		if (!el) return;

		if (playState === 'running') {
			setPlayState('paused');
			snapToNearestRow();
		} else {
			setPlayState('running');
			resumeAnimation();
		}
	};

	return (
		<div id="hello-scroller-container">
			<button id="hello-text-super" type="button" onClick={toggleAnimate}>
				<div
					id="hello-text-container"
					className='animation-slide-hello'
					ref={(ref) => {
						elRef.current = ref;
						animRef.current = getElAnimation(ref);
					}}
					style={computedStyle}
					translate="no"
				>
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
