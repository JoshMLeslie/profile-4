import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './blog-layout.scss';

interface Content {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
	text: string;
}

interface Header {
	title: string;
	hero?: string;
}

interface BlogProps {
	content: Content[];
	header: Header;
}

const BlogElement: React.FC<{block: Content}> = ({block}) =>
	React.createElement(block.type, {}, block.text);

const BlogLayoutComponent: React.FC = () => {
	const {ref} = useParams<{ref: string}>();
	const [blogData, setBlogData] = useState<null | BlogProps>(null);

	useEffect(() => {
		if (ref) {
			(async () => {
				try {
					const url = `/public/blogs/${ref}.json`;
					const res = await fetch(url).then((r) => r.json());
					if (res) {
						setBlogData(res);
					}
				} catch (e) {
					console.warn('error retrieving blog info. ref:', ref, e);
					alert('broken link');
				}
			})();
		}
	}, [ref]);

	if (!blogData) {
		return <>No post found;</>;
	}

	const {header, content} = blogData;

	return (
		<div id="blog-layout-container">
			<header>
				{header.hero && <img className='blog-hero-image' src={header.hero} loading="lazy" />}
				{/* <div style={{backgroundImage: `url(${header.hero})`}} /> */}
				<h1>{header.title}</h1>
			</header>
			<div className="blog-layout-content">
				{content.map((block) => (
					<BlogElement
						key={block.type + block.text.slice(0, 10)}
						block={block}
					/>
				))}
			</div>
		</div>
	);
};

export default BlogLayoutComponent;
