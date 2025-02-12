<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Contacts from '$lib/components/contacts.svelte';

	const { data } = $props();
	const { meta, headerData, contactData } = data;
</script>

<svelte:head>
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
