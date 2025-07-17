export interface IPost {
	id: string;
	caption: string;
	commentsCount: number;
	likeCount: number;
	mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	mediaUrl: string;
	permalink: string;
	timestamp: string;
	username: string;
}
