export const NoRelLink: React.FC<{
	children: string;
	href: string;
	blank?: boolean;
	className?: string;
}> = ({children, blank = true, href, className}) => (
	<a
		target={blank ? '_blank' : '_parent'}
		rel="nofollow noopener noreferrer"
		href={href}
		className={className}
	>
		{children}
	</a>
);
