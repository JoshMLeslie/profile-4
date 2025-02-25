import React from 'react';

const ResumeComponent: React.FC = () => {
	return (
		<div className="full-bleed no-scroll">
			<object
				data="/public/josh-leslie-resume.pdf"
				type="application/pdf"
				width="100%"
				height="100%"
			>
				<p>
					Your browser does not support PDFs. Please{' '}
					<a href="/public/josh-leslie-resume.pdf">click here</a> to download a
					copy.
				</p>
			</object>
		</div>
	);
};

export default ResumeComponent;
