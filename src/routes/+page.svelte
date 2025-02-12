<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Contacts from '$lib/components/contacts.svelte';
</script>

<svelte:head>
	<title>Production Department @ The Public Theater</title>
	<meta
		name="description"
		content="Contact information for the Production Department at The Public Theater."
	/>
	<meta
		name="keywords"
		content="The Public Theater, Production Department, Scenery, Props, Lighting, Audio, Costumes, Video, Production Management"
	/>
	<meta name="author" content="The Public Theater" />
	<meta name="robots" content="index, follow" />

	<meta property="og:title" content="Production Department @ The Public Theater" />
	<meta
		property="og:description"
		content="Contact information for the Production Department at The Public Theater."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<main>
	<Header />
	<Contacts />
</main>
