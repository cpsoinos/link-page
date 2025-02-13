<script lang="ts">
	import type { ActionButton, Logo } from '$lib/types';
	import Icon from './icon.svelte';

	const {
		logo,
		title,
		subtitle,
		actionButtons
	}: { actionButtons: ActionButton[]; logo: Logo; title: string; subtitle: string } = $props();
</script>

<div class="mx-auto flex w-full flex-col items-center gap-5 bg-black pt-8 pb-5 text-white lg:pt-12">
	<div class="flex size-25 items-center justify-center rounded-md bg-white">
		<img src={logo.src} alt={logo.alt} class="size-20 object-contain" width="80" height="80" />
	</div>

	<div class="flex w-full max-w-96 flex-col items-center gap-2 px-4">
		<h1 class="text-2xl font-bold">{title}</h1>
		<p class="text-sm">{subtitle}</p>
	</div>

	<div class="grid grid-flow-col items-start gap-1">
		{#each actionButtons as { icon, label, href }}
			<a {href} class="flex min-w-18 flex-col items-center gap-1">
				<div class="flex size-12 items-center justify-center rounded-md bg-white text-black">
					<Icon {icon} class="size-5" />
				</div>
				<p class="text-xs font-medium">{label}</p>
			</a>
		{/each}
	</div>
</div>
