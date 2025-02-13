<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Contacts from '$lib/components/contacts.svelte';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	const { meta, headerData, contactData } = data;

	$effect(() => {
		if (form?.vcard) {
			const blob = new Blob([form.vcard.content], { type: 'text/vcard' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = form.vcard.name;
			a.click();
			form = null;
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={meta.favicon} />
	<title>{meta.title}</title>
	<meta
		name="description"
		content="Contact information for the Production Department at The Public Theater."
	/>
	<meta
		name="keywords"
		content="The Public Theater, Production Department, Scenery, Props, Lighting, Audio, Costumes, Video, Production Management"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<main>
	<Header {...headerData} />
	<Contacts {...contactData} />
</main>
