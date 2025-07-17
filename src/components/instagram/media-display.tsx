import { useRef, useState } from "react";
import Icon from "../ui/icons";

interface MediaDisplayProps {
	mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	mediaUrl: string | string[];
	className?: string;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ mediaType, mediaUrl, className }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageError, setImageError] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	// Determinar si es un carousel y obtener las URLs como array
	const isCarousel = mediaType === "CAROUSEL_ALBUM";
	const urlsArray = Array.isArray(mediaUrl) ? mediaUrl : [mediaUrl];
	const currentUrl = urlsArray[currentIndex];

	const handlePrevious = () => {
		if (isCarousel && urlsArray.length > 1) {
			setCurrentIndex((prev) => (prev === 0 ? urlsArray.length - 1 : prev - 1));
		}
	};

	const handleNext = () => {
		if (isCarousel && urlsArray.length > 1) {
			setCurrentIndex((prev) => (prev === urlsArray.length - 1 ? 0 : prev + 1));
		}
	};

	const handleImageError = () => {
		setImageError(true);
	};

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVideoPlay = () => {
		setIsPlaying(true);
	};

	const handleVideoPause = () => {
		setIsPlaying(false);
	};

	const handleMuteToggle = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	if (imageError) {
		return (
			<div className={`bg-gray-200 flex items-center justify-center aspect-square ${className}`}>
				<div className="text-center text-gray-500">
					<div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded"></div>
					<p className="text-sm">Unable to load image</p>
				</div>
			</div>
		);
	}

	return (
		<div className={`relative aspect-square overflow-hidden ${className}`}>
			{mediaType === "VIDEO" ? (
				<div className="relative w-full h-full">
					<video
						ref={videoRef}
						src={currentUrl}
						className="w-full h-full object-cover"
						controls={false}
						muted={isMuted}
						loop
						aria-label="Video content"
						onPlay={handleVideoPlay}
						onPause={handleVideoPause}
					/>
					{!isPlaying && (
						<div className="absolute inset-0 flex items-center justify-center">
							<button
								onClick={handlePlayPause}
								className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-200"
								aria-label="Play video"
							>
								<Icon name="play" className="w-8 h-8 text-white" />
							</button>
						</div>
					)}
					{isPlaying && (
						<>
							<button
								onClick={handlePlayPause}
								className="absolute bottom-3 left-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
								aria-label="Pause video"
							>
								<Icon name="pause" className="w-4 h-4 text-white" />
							</button>
							<button
								onClick={handleMuteToggle}
								className="absolute bottom-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
								aria-label={isMuted ? "Unmute video" : "Mute video"}
							>
								<Icon name={isMuted ? "muted" : "volume"} className="w-4 h-4 text-white" />
							</button>
						</>
					)}
				</div>
			) : (
				<img
					src={currentUrl}
					alt="Media content"
					className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
					onError={handleImageError}
					loading="lazy"
				/>
			)}

			{/* Carousel Controls */}
			{isCarousel && urlsArray.length > 1 && (
				<>
					<button
						onClick={handlePrevious}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
						aria-label="Previous image"
					>
						<Icon name="chev-left" className="w-4 h-4 text-white" />
					</button>

					<button
						onClick={handleNext}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
						aria-label="Next image"
					>
						<Icon name="chev-right" className="w-4 h-4 text-white" />
					</button>

					{/* Carousel Indicators */}
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
						{urlsArray.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 rounded-full transition-all duration-200 ${
									index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}

			{/* Multiple Items Indicator */}
			{isCarousel && urlsArray.length > 1 && (
				<div className="absolute top-3 right-3">
					<div className="bg-black bg-opacity-50 rounded-full px-2 py-1">
						<span className="text-white text-xs font-medium">
							{currentIndex + 1}/{urlsArray.length}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default MediaDisplay;
