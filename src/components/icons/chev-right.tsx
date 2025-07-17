const ChevRightIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ChevRight" {...props}>
		<path
			d="m9 5 2 2.333M9 19l6-7-1.5-1.75"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default ChevRightIcon;
