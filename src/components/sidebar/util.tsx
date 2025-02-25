import { Link } from 'react-router';
import CollapseListComponent from '../CollapseList';

interface ListSectionContent {
	dateText: string;
	name: string;
	url: string;
}

interface ListSection {
	children: Array<ListSectionContent>;
	sectionTitle: string;
	initCollapsed?: boolean;
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
}) => {
	return (
		<Link to={url}>
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
