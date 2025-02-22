export const NoRelLink: React.FC<{
	children: string;
	href: string;
	blank?: boolean;
}> = ({children, href, blank = true}) => (
	<a
		href={href}
		target={blank ? '_blank' : '_parent'}
		rel="nofollow noopener noreferrer"
	>
		{children}
	</a>
);
