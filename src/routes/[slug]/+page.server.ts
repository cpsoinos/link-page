import { Bindings } from '$lib/server/bindings';
import type { ContactItem, HeaderData, Meta, VCardLinkData } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function load(event: RequestEvent) {
	const { params } = event;
	const { slug } = params;

	// let actionButtons: ActionButton[] = [];
	// let logo: Logo;
	// const [actionButtonsRaw, logoRaw] = await Promise.all([Bindings.env.LINK_PAGES.get(`${slug}:action-buttons`), Bindings.env.LINK_PAGES.get(`${slug}:logo`)]);

	// if (actionButtonsRaw) {
	// 	actionButtons = JSON.parse(actionButtonsRaw);
	// }
	// if (logoRaw) {
	//   logo = JSON.parse(logoRaw);
	// }

	let parsedData:
		| {
				meta: Meta;
				headerData: HeaderData;
				contactData: {
					contacts: ContactItem[][];
					vcard: VCardLinkData;
				};
		  }
		| undefined = undefined;
	const rawData = await Bindings.env.LINK_PAGES.get(slug);

	if (rawData) {
		parsedData = JSON.parse(rawData);
	}

	return parsedData ?? error(404, 'Not found');
}

// const meta = {
// 	title: 'Production Department @ The Public Theater',
// 	description: 'Contact information for the Production Department at The Public Theater.',
// 	keywords:
// 		'The Public Theater, Production Department, Scenery, Props, Lighting, Audio, Costumes, Video, Production Management',
// };

// const headerData = {
//   logo: {
//     src: '/images/logo-public-theater.webp',
//     alt: 'Public Theater Logo'
//   },
//   title: 'Production Department',
//   subtitle: '@ The Public Theater',
//   actionButtons: [
// 		{
// 			icon: 'clarity:email-solid',
// 			label: 'Email',
// 			href: '#contacts'
// 		},
// 		{
// 			icon: 'basil:location-solid',
// 			label: 'Location',
// 			href: 'https://www.google.com/maps/place/425+Lafayette+Street,+New+York,+NY,+USA'
// 		}
// 	]
// }

// const contacts = [
// 	[
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'SceneryDepartment@publictheater.org',
// 			href: 'mailto:SceneryDepartment@publictheater.org',
// 			description: 'Scenery'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'PropsDepartment@publictheater.org',
// 			href: 'mailto:PropsDepartment@publictheater.org',
// 			description: 'Props'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'LightingDepartment@publictheater.org',
// 			href: 'mailto:LightingDepartment@publictheater.org',
// 			description: 'Lighting'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'AudioDepartment@publictheater.org',
// 			href: 'mailto:AudioDepartment@publictheater.org',
// 			description: 'Audio'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'CostumesDepartment@publictheater.org',
// 			href: 'mailto:CostumesDepartment@publictheater.org',
// 			description: 'Costumes'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'VideoDepartment@publictheater.org',
// 			href: 'mailto:VideoDepartment@publictheater.org',
// 			description: 'Video'
// 		},
// 		{
// 			icon: 'clarity:email-line',
// 			value: 'ProductionManagement@publictheater.org',
// 			href: 'mailto:ProductionManagement@publictheater.org',
// 			description: 'Production Management'
// 		}
// 	],
// 	[
// 		{
// 			icon: 'mdi:web',
// 			value: 'https://publictheater.org',
// 			href: 'https://publictheater.org'
// 		}
// 	],
// 	[
// 		{
// 			icon: 'basil:location-outline',
// 			value: '425 Lafayette Street, New York, NY, USA',
// 			href: 'https://www.google.com/maps/place/425+Lafayette+Street,+New+York,+NY,+USA',
// 			description: 'Show on map'
// 		}
// 	],
// 	[
// 		{
// 			icon: 'skill-icons:instagram',
// 			value: 'Instagram',
// 			href: 'https://www.instagram.com/publictheaterny',
// 			description: '@publictheaterny'
// 		}
// 	]
// ];

// const vcard = {
//   icon: 'gravity-ui:person-plus',
//   cta: 'Add to Contacts',
// 	url: '/vcards/public-theater-production-department.vcf',
// 	filename: 'Public Theater Production.vcf'
// };

// const contactData = {
//   contacts,
//   vcard
// }

// const data = {
//   meta,
//   headerData,
//   contactData
// }
