import { JSX } from 'react';
import { ContentBlock } from '../types/util';
import { NoRelLink } from './util';


export const RenderContent: React.FC<{blocks: ContentBlock[]}> = ({blocks}) => {
	const output: JSX.Element[] = [];
	let paragraph: JSX.Element[] = [];

	const flushParagraph = () => {
		if (paragraph.length) {
			output.push(<p>{paragraph}</p>);
			paragraph = [];
		}
	};

	for (const block of blocks) {
		switch (block.tag) {
			case 'p':
				flushParagraph();
				output.push(<p>{block.text}</p>);
				break;

			case 'p-start':
			case 'p-continue':
			case 'p-end':
				paragraph.push(<>{block.text}</>);
				if (block.tag === 'p-end') {
					flushParagraph();
				}
				break;

			case 'a':
				paragraph.push(<NoRelLink href={block.href}>{block.text}</NoRelLink>);
				break;

			case 'h2':
				flushParagraph();
				output.push(<h2>{block.text}</h2>);
				break;

			case 'h3':
				flushParagraph();
				output.push(<h3>{block.text}</h3>);
				break;
		}
	}

	flushParagraph();
	return output;
};
