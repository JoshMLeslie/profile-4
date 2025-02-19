import React, { ReactNode, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import './collapse-list.css';

interface CollapseListProps {
	title: ReactNode;
	children: ReactNode;
	initCollapsed?: boolean;
}

/**
 * initializes collapsed by default. set `initCollapsed` to false otherwise
 */
const CollapseListComponent: React.FC<CollapseListProps> = ({
	children,
	title,
	initCollapsed = true,
}) => {
	const [height, setHeight] = useState<'auto' | number>(
		initCollapsed ? 0 : 'auto'
	);
	const toggleHeight = () => setHeight((h) => (h === 0 ? 'auto' : 0));

	return (
		<div className="collapse-list-container">
			<div className="collapse-list-header" style={{
				marginBottom: height ? '8px' : '0'
			}}>
				{title}
				<button onClick={toggleHeight}> {height ? 'Collapse' : 'Expand'}</button>
			</div>
			<AnimateHeight
				duration={250}
				height={height}
				className="collapse-list-content"
			>
				{children}
			</AnimateHeight>
		</div>
	);
};

export default CollapseListComponent;
