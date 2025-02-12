import { dev } from '$app/environment';
import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Bindings } from '$lib/server/bindings';
import { preloadIcons } from '$lib/icons';

let platform: App.Platform;

const devShim: Handle = async ({ event, resolve }) => {
	if (dev) {
		const { getPlatformProxy } = await import('wrangler');
		platform = (await getPlatformProxy<Env>()) as unknown as App.Platform;
		event.platform = {
			...event.platform,
			...platform
		};
	}
	return resolve(event);
};

const initBindings: Handle = async ({ event, resolve }) => {
	Bindings.initialize(event.platform!.env);
	return resolve(event);
};

const iconsHook: Handle = async ({ event, resolve }) => {
	await preloadIcons();
	return resolve(event);
};

export const handle: Handle = sequence(devShim, initBindings, iconsHook);
