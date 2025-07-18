import type { IPost } from "@/types/post";
import PostCard from "./post-card";
import { Button } from "../ui/button";
import Icon from "../ui/icons";

interface PostGridProps {
	posts: IPost[];
	isLoading: boolean;
	error?: string | null;
	onRetry?: () => void;
}

export const PostGrid: React.FC<PostGridProps> = ({ posts, isLoading = false, error, onRetry }) => {
	const LoadingSkeleton = () => (
		<div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 animate-pulse">
			<div className="flex items-center gap-3 p-3 border-b border-gray-100">
				<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
				<div className="space-y-1">
					<div className="w-24 h-3 bg-gray-300 rounded"></div>
					<div className="w-16 h-2 bg-gray-300 rounded"></div>
				</div>
			</div>
			<div className="aspect-square bg-gray-300"></div>
			<div className="p-3 space-y-3">
				<div className="flex gap-4">
					<div className="w-12 h-4 bg-gray-300 rounded"></div>
					<div className="w-12 h-4 bg-gray-300 rounded"></div>
				</div>
				<div className="space-y-2">
					<div className="w-full h-3 bg-gray-300 rounded"></div>
					<div className="w-3/4 h-3 bg-gray-300 rounded"></div>
				</div>
				<div className="flex justify-end">
					<div className="w-24 h-6 bg-gray-300 rounded-full"></div>
				</div>
			</div>
		</div>
	);

	// Error state component
	const ErrorState = () => (
		<div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
			<div className="mb-4 p-3 bg-red-100 rounded-full">
				<Icon name="danger-circle" className="w-8 h-8 text-red-600" strokeWidth={3} />
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mb-2">No se pudieron cargar los posts</h3>
			<p className="text-gray-600 mb-4 max-w-md">Por favor, inténtalo de nuevo.</p>
			{onRetry && (
				<Button onClick={onRetry} variant={"secondary"}>
					<Icon name="refresh" className="w-4 h-4 mr-2" />
					Intentar de nuevo
				</Button>
			)}
		</div>
	);

	// Empty state component
	const EmptyState = () => (
		<div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
			<div className="mb-4 p-3 bg-gray-100 rounded-full">
				<div className="w-8 h-8 bg-gray-400 rounded"></div>
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron posts</h3>
			<p className="text-gray-600 max-w-md">
				No hay posts para mostrar en este momento. Vuelve a comprobar más tarde para nuevos contenidos.
			</p>
		</div>
	);

	return (
		<div className="w-full">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="feed" aria-label="Instagram posts">
				{isLoading ? (
					// Show loading skeletons
					Array.from({ length: 9 }).map((_, index) => <LoadingSkeleton key={`skeleton-${index}`} />)
				) : error ? (
					// Show error state
					<ErrorState />
				) : posts.length === 0 ? (
					// Show empty state
					<EmptyState />
				) : (
					// Show posts
					posts.map((post) => (
						<PostCard
							key={post.id}
							post={post}
							className="transform hover:scale-105 transition-transform duration-200"
						/>
					))
				)}
			</div>
		</div>
	);
};
