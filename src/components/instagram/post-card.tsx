import type { IPost } from "@/types/post";
import EngagementMetrics from "./engagement-metrics";
import MediaDisplay from "./media-display";
import { ShareButton } from "./share-button";
import { BadgeCheck } from "lucide-react";

interface PostCardProps {
	post: IPost;
	className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className = "" }) => {
	const formatTimeAgo = (timestamp: string): string => {
		const now = new Date();
		const date = new Date(timestamp);

		// Validar que la fecha sea válida
		if (isNaN(date.getTime())) {
			return "Invalid date";
		}

		const diff = now.getTime() - date.getTime();
		const minutes = Math.floor(diff / (1000 * 60));
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));

		if (minutes < 1) {
			return "now";
		} else if (minutes < 60) {
			return `${minutes}m`;
		} else if (hours < 24) {
			return `${hours}h`;
		} else {
			return `${days}d`;
		}
	};
	return (
		<article
			className={`
        bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
        overflow-hidden border border-gray-200 
        ${className}
      `}
			role="article"
			aria-label={`Post by ${post.username}`}
		>
			{/* Post Header */}
			<div className="flex items-center justify-between p-3 border-b border-gray-100">
				<div className="flex items-center gap-3">
					<div>
						<h3 className="font-semibold text-sm text-gray-900 flex items-center gap-1">
							{post.username}
							<BadgeCheck size={16} strokeWidth={2.5} className="text-primary" />
						</h3>
					</div>
				</div>
				<time
					dateTime={post.timestamp.toString()}
					className="text-xs text-gray-500"
					title={post.timestamp.toLocaleString()}
				>
					{formatTimeAgo(post.timestamp)}
				</time>
			</div>

			{/* Media Display */}
			<MediaDisplay mediaType={post.mediaType} mediaUrl={post.mediaUrl} />

			{/* Post Content */}
			<div className="p-3 space-y-3">
				{/* Engagement Metrics */}
				<EngagementMetrics engagement={{ commentsCount: post.commentsCount, likesCount: post.likeCount }} />

				{/* Caption */}
				<div className="space-y-2">
					<p className="text-sm text-gray-900 line-clamp-2 leading-relaxed">
						<span className="font-semibold">{post.username}</span> {post.caption}
					</p>
				</div>

				{/* Share Button */}
				<div className="flex justify-end">
					<ShareButton instagramUrl={post.permalink} />
				</div>
			</div>
		</article>
	);
};

export default PostCard;
