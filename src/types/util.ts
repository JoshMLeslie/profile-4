export type Dialect = 'conversational' | 'corporate' | 'absurdist';

export type SetDialect = React.Dispatch<React.SetStateAction<Dialect>>;
export type SetAnimating = React.Dispatch<React.SetStateAction<boolean>>;

export type ContentBlock =
	| {tag: 'h2' | 'h3'; text: string}
	| {tag: 'p'; text: string} // standalone paragraph
	| {tag: 'p-start'; text: string} // beginning of multi-part paragraph
	| {tag: 'p-continue'; text: string} // continuation of multi-part paragraph
	| {tag: 'p-end'; text: string} // end of multi-part paragraph
	| {tag: 'a'; text: string; href: string};

export interface PageContent {
	conversational?: ContentBlock[];
	corporate?: ContentBlock[];
}