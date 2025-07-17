import { environment } from "@/config/environment";
import type { IPost } from "@/types/post";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePosts = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchPosts = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const { data } = await axios.get<IPost[]>(`${environment.API_URL}/posts`);
			setPosts(data);
		} catch (error) {
			console.log("Error fetching posts:", error);
			setError(error instanceof Error ? error.message : "An unknown error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	const retry = () => {
		fetchPosts();
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return {
		posts,
		isLoading,
		error,
		retry,
		refetch: fetchPosts,
	};
};
