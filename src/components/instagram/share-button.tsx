import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Icon from "../ui/icons";

interface ShareButtonProps {
	instagramUrl: string;
	className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ instagramUrl, className = "" }) => {
	const handleShare = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		window.open(instagramUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<Button
			onClick={handleShare}
			variant={"outline"}
			className={cn("", className)}
			aria-label="View original post on Instagram"
			title="View original post on Instagram"
		>
			<Icon name="square-share" className="w-4 h-4" />
			<span className="hidden md:block">Ver en Instagram</span>
		</Button>
	);
};
