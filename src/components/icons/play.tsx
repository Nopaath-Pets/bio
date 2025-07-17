const PlayIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Play" {...props}>
		<path
			d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
		/>
	</svg>
);
export default PlayIcon;
