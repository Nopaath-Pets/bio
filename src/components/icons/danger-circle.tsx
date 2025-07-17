const DangerCircleIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DangerCircle" {...props}>
		<path d="M12 7v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
		<circle cx={12} cy={16} r={1} fill="currentColor" />
		<path
			d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
		/>
	</svg>
);
export default DangerCircleIcon;
