export const logoComponents = {
	"icon-dark": () => import("./logo-icon-dark"),
};

export type LogoName = keyof typeof logoComponents;
