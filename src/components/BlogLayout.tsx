import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './blog-layout.scss';

interface BlogProps {
	content: any;
	header: {
		title: string;
		bgImageUrl?: string;
	};
}

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
						console.log(res);
						setBlogData(res);
					}
				} catch (e) {
					console.warn('error retrieving blog info. ref:', ref, e);
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
				<span>{header.title}</span>
				{header.bgImageUrl && <img src={header.bgImageUrl} />}
			</header>
			<div className="blog-layout-content">{content}</div>
		</div>
	);
};

export default BlogLayoutComponent;
