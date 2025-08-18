import { Dialect, SetAnimating, SetDialect } from '../types/util';
import './dialect-switchers.scss';

export const DialectSwitcher: React.FC<{
	dialect: Dialect;
	setDialect: SetDialect;
	animating: boolean;
	setAnimating: SetAnimating;
}> = ({animating, setAnimating, dialect, setDialect}) => {
	const handleClick = (d: Dialect) => {
		if (d === dialect) {
			return;
		}
		setAnimating(true);
		setDialect(d);
		setTimeout(() => setAnimating(false), 300);
	};

	return (
		<div id="dialect-switcher" className={animating ? 'animating' : ''}>
			<div
				id="DS_highlight-overlay"
				className={dialect === 'conversational' ? 'left' : 'right'}
			></div>
			<button
				className={dialect === 'conversational' ? 'selected' : ''}
				onClick={() => handleClick('conversational')}
			>
				{dialect === 'conversational' ? 'Conversational' : 'Casual Friday'}
			</button>
			<button
				className={dialect !== 'conversational' ? 'selected' : ''}
				onClick={() => handleClick('corporate')}
			>
				{dialect === 'conversational' ? 'Professional' : 'Client-Ready'}
			</button>
		</div>
	);
};
