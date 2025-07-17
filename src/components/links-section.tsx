import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Icon from "./ui/icons";

const LinksSection = () => {
	const links = [
		{
			name: "Facebook",
			url: "https://facebook.com/profile.php?id=61578152124441",
			icon: "facebook",
		},
		{
			name: "Instagram",
			url: "https://instagram.com/nopaath.pets",
			icon: "instagram",
		},
		{
			name: "TikTok",
			url: "https://tiktok.com/@nopaath.pets",
			icon: "tiktok",
		},
	];

	return (
		<div className="flex items-center justify-center gap-4 flex-wrap">
			{links.map((link) => (
				<a
					key={link.name}
					href={link.url}
					target="_blank"
					className="justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2 hover:scale-105 transition-transform"
				>
					<Icon name={link.icon as any} className="h-4 w-4 text-foreground" />
					<span>{link.name}</span>
				</a>
			))}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<Icon name={"whatsapp"} className="h-4 w-4 text-foreground" />
						<span className="ml-2">Whatsapp</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width)">
					<DropdownMenuItem asChild>
						<a href="https://wa.me/51910975251" target="_blank" rel="noopener noreferrer">
							+51 910 975 251
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<a href="https://wa.me/51931854197" target="_blank" rel="noopener noreferrer">
							+51 931 854 197
						</a>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default LinksSection;
