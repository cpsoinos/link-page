import { Bindings } from '$lib/server/bindings';
import type { ContactItem, HeaderData, Meta, VCardLinkData } from '$lib/types';
import { error, fail, type Actions } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function load(event: RequestEvent) {
	const { params } = event;
	const { slug } = params;

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

export const actions: Actions = {
	downloadVCard: async ({ params }) => {
		const { slug } = params;
		const key = `${slug}:vcard`;
		const vcardContent = await Bindings.env.LINK_PAGES.get(key);
		if (!vcardContent) {
			return fail(404);
		}
		const name = parseVCardFN(vcardContent) ?? slug;

		return {
			vcard: {
				name,
				content: vcardContent
			}
		};
	}
};

function parseVCardFN(vcard: string): string | null {
	const match = vcard.match(/^FN:(.+)$/m);
	return match ? match[1].trim() : null;
}
