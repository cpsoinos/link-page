export interface Meta {
	title: string;
	description: string;
	keywords: string;
}

export interface ActionButton {
	icon: string;
	label: string;
	href: string;
}

export interface Logo {
	src: string;
	alt: string;
}

export interface HeaderData {
	logo: Logo;
	title: string;
	subtitle: string;
	actionButtons: ActionButton[];
}

export interface ContactItem {
	icon: string;
	value: string;
	href: string;
	description?: string;
}

export interface VCardLinkData {
	icon: string;
	cta: string;
}
