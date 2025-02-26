import React, { useEffect, useRef, useState } from 'react';
import { useTypedParams } from '../use/use-typed-params';
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
	const {blogName} = useTypedParams();
	const heroRef = useRef<null | HTMLImageElement>(null);
	const [blogData, setBlogData] = useState<null | BlogProps>(null);
	const [loading, setLoading] = useState(true);
	const [imgLoading, setImgLoading] = useState(true);

	useEffect(() => {
		if (blogName) {
			(async () => {
				try {
					const url = `/blog/${blogName}.json`;
					const res = await fetch(url).then((r) => r.json());
					if (res) {
						setBlogData(res);
					}
				} catch (e) {
					console.warn('error retrieving blog info. ref:', blogName, e);
					alert('broken link');
				} finally {
					setLoading(false);
				}
			})();
		}
		return () => {
			setLoading(true);
			setImgLoading(true);
		};
	}, [blogName]);

	const handleFullscreenHero = () => {
		if (heroRef.current) {
			if (!document.fullscreenElement) {
				heroRef.current.requestFullscreen();
			} else {
				document.exitFullscreen();
			}
		}
	};

	if (!blogData) {
		return loading ? <>Loading</> : <>No post found</>;
	}

	const {header, content} = blogData;

	return (
		<div id="blog-layout-container">
			<header>
				{header.hero && (
					<button
						style={{opacity: imgLoading ? 0.5 : 1}}
						type="button"
						onClick={handleFullscreenHero}
						className="blog-hero-image"
					>
						<img
							ref={heroRef}
							src={header.hero}
							loading="lazy"
							onLoad={() => setImgLoading(false)}
						/>
					</button>
				)}
				<h1>{loading ? 'Loading' : header.title}</h1>
			</header>
			<div className="blog-layout-content">
				{!loading &&
					content.map((block) => (
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
