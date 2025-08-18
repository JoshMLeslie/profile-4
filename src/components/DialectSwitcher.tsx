import { Dialect, SetAnimating, SetDialect } from '../types/util';
import './dialect-switchers.scss';

const trinaryText: Record<Dialect, Record<Dialect, string>> = {
	conversational: {
		conversational: 'Conversational',
		corporate: 'Corporate',
		absurdist: 'Absurdist',
	},
	absurdist: {
		conversational: 'Disruptively Authentic',
		corporate: 'Traditionally Structured',
		absurdist: 'Synergistically Optimized',
	},
	corporate: {
		conversational: 'Informal',
		corporate: 'Professional',
		absurdist: 'Enterprise-Grade',
	},
};

export const DialectSwitcher: React.FC<{
	dialect: Dialect;
	setDialect: SetDialect;
	animating: boolean;
	setAnimating: SetAnimating;
	onClick?: (d: Dialect) => void;
}> = ({animating, setAnimating, dialect, setDialect, onClick}) => {
	const handleClick = (d: Dialect) => {
		if (d === dialect) {
			return;
		}
		setAnimating(true);
		setDialect(d);
		onClick?.(d);
		setTimeout(() => setAnimating(false), 500);
	};

	return (
		<div id="dialect-switcher" className={animating ? 'animating' : ''}>
			<div
				id="DS_highlight-overlay"
				className={
					dialect === 'conversational'
						? 'left'
						: dialect === 'corporate'
						? 'mid'
						: 'right'
				}
			></div>
			<button
				className={dialect === 'conversational' ? 'selected' : ''}
				onClick={() => handleClick('conversational')}
			>
				{trinaryText[dialect].conversational}
			</button>
			<button
				className={dialect === 'corporate' ? 'selected' : ''}
				onClick={() => handleClick('corporate')}
			>
				{trinaryText[dialect].corporate}
			</button>
			<button
				className={dialect === 'absurdist' ? 'selected' : ''}
				onClick={() => handleClick('absurdist')}
			>
				{trinaryText[dialect]['absurdist']}
			</button>
		</div>
	);
};
