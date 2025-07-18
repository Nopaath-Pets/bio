export const logoComponents = {
	"icon-light": () => import("./logo-icon-light"),
};

export type LogoName = keyof typeof logoComponents;
