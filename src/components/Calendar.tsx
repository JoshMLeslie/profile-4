import React from 'react';

const CalendarComponent: React.FC = () => {
	return (
		<div className="full-bleed no-scroll">
			<h2
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				Loading... If you still see this after a few seconds, try refreshing.
			</h2>
			<div
				className="calendly-inline-widget"
				data-url="https://calendly.com/joshmleslie/30m"
				style={{width: '100%', height: '95%'}}
			></div>

			<script
				type="text/javascript"
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			></script>
		</div>
	);
};

export default CalendarComponent;
