import React, { useState } from 'react';
import AboutContent from '../data/about-content.json';
import AboutWelcomeContent from '../data/about-welcome-content.json';
import { ContentBlock, Dialect } from '../types/util';
import './about.scss';
import { RenderContent } from './AboutParser';
import { DialectSwitcher } from './DialectSwitcher';
import HelloScroller from './HelloScroller';

const AboutComponent: React.FC = () => {
	const [dialect, setDialect] = useState<Dialect>('conversational');
	const [animating, setAnimating] = useState(false);
	const [aboutContent, setAboutContent] = useState<ContentBlock[]>(
		AboutContent[dialect] as ContentBlock[]
	);

	const handleDialectUpdate = (d: Dialect) => {
		setAboutContent(AboutContent[d] as ContentBlock[]);
	};

	return (
		<div id="about-container">
			<HelloScroller />
			<div style={{marginTop: '16px'}}>
				<DialectSwitcher
					dialect={dialect}
					setDialect={setDialect}
					animating={animating}
					setAnimating={setAnimating}
					onClick={handleDialectUpdate}
				/>
			</div>
			<div className={animating ? 'animating' : ''}>
				<div id="selfie-and-text">
					<div id="selfie-text">
						<h2>Welcome</h2>
						<p>{AboutWelcomeContent[dialect][0]}</p>
						<p>{AboutWelcomeContent[dialect][1]}</p>
					</div>
					<div id="selfie-img" />
				</div>
				<RenderContent blocks={aboutContent} />
			</div>
		</div>
	);
};

export default AboutComponent;
