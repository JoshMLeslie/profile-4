import { Link } from 'react-router';
import CollapseListComponent from '../CollapseList';

interface ListSectionContent {
	dateText: string;
	name: string;
	url: string;
	urlBase?: string;
}

interface ListSection {
	children: Array<ListSectionContent>;
	sectionTitle: string;
	initCollapsed?: boolean;
	urlBase?: string;
}

export const ExternalLink: React.FC<{
	link: string;
	name: string;
	imgLink?: string;
}> = ({imgLink, link, name}) => (
	<a href={link} target="_blank" rel="nofollow noopener">
		{imgLink && <img className="icon" src={'/icons/' + imgLink} />}
		<span>{name}</span>
	</a>
);

export const ListSectionatorLink: React.FC<ListSectionContent> = ({
	dateText,
	name,
	url,
	urlBase,
}) => {
	// Sections may omit urlBase and give an absolute url instead. Joining
	// blindly turned that into "//blog/pcw", which a browser reads as a
	// protocol-relative URL and resolves to the host "blog".
	const href =
		'/' +
		[urlBase, url]
			.filter(Boolean)
			.join('/')
			.replace(/\/{2,}/g, '/')
			.replace(/^\//, '');
	return (
		<Link to={href}>
			<div className="title-year">
				<span>{name}</span>
				<span className="date-text">{dateText}</span>
			</div>
		</Link>
	);
};
export const ListSectionator: React.FC<ListSection> = ({
	sectionTitle,
	initCollapsed,
	urlBase,
	children,
}) => {
	return (
		<section>
			<CollapseListComponent
				initCollapsed={initCollapsed}
				title={<h3>{sectionTitle}</h3>}
				children={
					<div className="link-section-links">
						{children.map((child) => {
							return (
								<ListSectionatorLink
									key={`${sectionTitle}-${child.name}`}
									urlBase={urlBase}
									{...child}
								/>
							);
						})}
					</div>
				}
			/>
		</section>
	);
};
