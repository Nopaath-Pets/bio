import { cn } from "@/lib/utils";
import Icon from "../ui/icons";

interface EngagementMetricsProps {
	engagement: {
		likesCount: number;
		commentsCount: number;
	};
	className?: string;
}

const EngagementMetrics: React.FC<EngagementMetricsProps> = ({ engagement, className }) => {
	const formatCount = (count: number): string => {
		if (count >= 1000000) {
			return `${(count / 1000000).toFixed(1)}M`;
		}
		if (count >= 1000) {
			return `${(count / 1000).toFixed(1)}K`;
		}
		return count.toString();
	};

	const formatFullCount = (count: number): string => {
		return count.toLocaleString();
	};

	return (
		<div className={cn("flex items-center gap-4", className)}>
			<div className="flex items-center gap-1 text-gray-600">
				<Icon name="heart" className="w-4 h-4" />
				<span
					className="text-sm font-medium"
					title={`${formatFullCount(engagement.likesCount)} likes`}
					aria-label={`${formatFullCount(engagement.likesCount)} likes`}
				>
					{formatCount(engagement.likesCount)}
				</span>
			</div>

			<div className="flex items-center gap-1 text-gray-600">
				<Icon name="chat-round-dots" className="w-4 h-4" />
				<span
					className="text-sm font-medium"
					title={`${formatFullCount(engagement.commentsCount)} comments`}
					aria-label={`${formatFullCount(engagement.commentsCount)} comments`}
				>
					{formatCount(engagement.commentsCount)}
				</span>
			</div>
		</div>
	);
};

export default EngagementMetrics;
