const ChevLeftIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ChevLeft" {...props}>
		<path
			d="m15 19-6-7 1.5-1.75M15 5l-2 2.333"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default ChevLeftIcon;
