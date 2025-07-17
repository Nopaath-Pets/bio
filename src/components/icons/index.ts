export const iconComponents = {
	whatsapp: () => import("./whatsapp"),
	instagram: () => import("./instagram"),
	tiktok: () => import("./tiktok"),
	facebook: () => import("./facebook"),
	play: () => import("./play"),
	pause: () => import("./pause"),
	volume: () => import("./volume"),
	muted: () => import("./muted"),
	refresh: () => import("./refresh"),
	"square-share": () => import("./square-share"),
	heart: () => import("./heart"),
	"chat-round-dots": () => import("./chat-round-dots"),
	"danger-circle": () => import("./danger-circle"),
	"chev-right": () => import("./chev-right"),
	"chev-left": () => import("./chev-left"),
};

export type IconName = keyof typeof iconComponents;
