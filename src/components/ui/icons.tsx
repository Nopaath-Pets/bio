import React, { Suspense } from "react";
import { iconComponents, type IconName } from "../icons";

interface IconProps {
	name: IconName;
	size?: number;
	className?: string;
	[key: string]: any;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = "", ...props }) => {
	const IconComponent = React.lazy(async () => {
		const module = await iconComponents[name]();
		return { default: module.default };
	});

	return (
		<Suspense fallback={<div style={{ width: size, height: size }} className={className} />}>
			<IconComponent width={size} height={size} className={className} {...props} />
		</Suspense>
	);
};

export default Icon;
