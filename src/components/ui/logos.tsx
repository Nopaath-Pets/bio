import React, { Suspense } from "react";
import { logoComponents, type LogoName } from "../logos";

interface LogoProps {
	name: LogoName;
	size?: number;
	className?: string;
	[key: string]: any;
}

const Logo: React.FC<LogoProps> = ({ name, size = 24, className = "", ...props }) => {
	const LogoComponent = React.lazy(async () => {
		const module = await logoComponents[name]();
		return { default: module.default };
	});

	return (
		<Suspense fallback={<div style={{ width: size, height: size }} className={className} />}>
			<LogoComponent width={size} height={size} className={className} {...props} />
		</Suspense>
	);
};

export default Logo;
