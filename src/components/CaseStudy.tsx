import React, { useEffect, useMemo, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useTypedParams } from '../use/use-typed-params';
import './case-study.scss';
import { NoRelLink } from './util';

interface CaseStudyImageData {
	type: 'image';
	fileName: string; // via /public/case-study/image/*
	text?: string; // injected into buttons alike "Expand CONTENT image" / "Open CONTENT image in new tab"
	hideExpand?: boolean;
	hideNewTab?: boolean;
}
type CaseStudyDatum =
	| {
			type: 'h2' | 'h3' | 'p';
			text: string;
	  }
	| {
			type: 'list';
			text: string[];
	  }
	| CaseStudyImageData;

const CaseStudyImage: React.FC<Omit<CaseStudyImageData, 'type'>> = ({
	fileName,
	hideExpand,
	hideNewTab,
	text,
}) => {
	const imageUrl = useMemo(() => '/case-study/image/' + fileName, [fileName]);
	const [height, setHeight] = useState<'auto' | number>(0);
	const toggleHeight = () => setHeight((h) => (h === 0 ? 'auto' : 0));

	return (
		<div className="case-study-images">
			<div className="case-study-actions">
				{!hideNewTab && (
					<NoRelLink href={imageUrl}>
						{`Open ${text || ''} image in new tab`}
					</NoRelLink>
				)}
				{!hideExpand && (
					<button type="button" onClick={toggleHeight}>
						Expand {text} image
					</button>
				)}
			</div>

			{!hideExpand && (
				<AnimateHeight
					duration={250}
					height={height}
					className="inline-case-image"
				>
					<img src={imageUrl} loading="lazy" />
				</AnimateHeight>
			)}
		</div>
	);
};

const CaseStudyElement: React.FC<CaseStudyDatum> = ({
	type,
	text,
	...imgData
}) => {
	if (type === 'list') {
		return React.createElement(
			'ol',
			{},
			text.map((text) => <li key={text.slice(0, 20)}>{text}</li>)
		);
	} else if (type === 'image') {
		return <CaseStudyImage {...({text, ...imgData} as CaseStudyImageData)} />;
	} else {
		return React.createElement(type, {}, text);
	}
};

interface CaseStudyData {
	urlTitle: string;
	description: string;
	examination: CaseStudyDatum[];
	suggestion: CaseStudyDatum[];
}

const CaseStudyComponent: React.FC = () => {
	const {caseName} = useTypedParams();

	const [caseData, setCaseData] = useState<null | CaseStudyData>(null);
	const [loading, setLoading] = useState(true);
	const [selectedTab, setSelectedTab] = useState<'examination' | 'suggestion'>(
		'examination'
	);

	useEffect(() => {
		if (caseName) {
			(async () => {
				try {
					const url = `/case-study/${caseName}.json`;
					const res = await fetch(url).then((r) => r.json());
					if (res) {
						setCaseData(res);
					}
				} catch (e) {
					console.warn('error retrieving blog info. ref:', caseName, e);
					alert('broken link');
				} finally {
					setLoading(false);
				}
			})();
		}
		return () => {
			setLoading(true);
		};
	}, [caseName]);

	if (!caseData) {
		return loading ? <>Loading</> : <>No post found</>;
	}

	const {urlTitle, description} = caseData;

	return (
		<div id="case-study-container">
			<div id="header">
				<h1>Case Study</h1>
				<p>
					{loading ? (
						'Loading'
					) : (
						<NoRelLink href={urlTitle}>{urlTitle}</NoRelLink>
					)}
				</p>
			</div>
			<h2>Description</h2>
			<p>{description}</p>
			<div className="tab-selector">
				<button
					className={selectedTab === 'examination' ? 'selected' : ''}
					onClick={() => setSelectedTab('examination')}
				>
					Examination
				</button>
				<button
					className={selectedTab === 'suggestion' ? 'selected' : ''}
					onClick={() => setSelectedTab('suggestion')}
				>
					Suggestion
				</button>
			</div>
			{caseData[selectedTab].map((data, i) => (
				<CaseStudyElement key={i + '-' + data.text?.slice(0, 20)} {...data} />
			))}
		</div>
	);
};

export default CaseStudyComponent;
