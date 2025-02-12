<script lang="ts">
	import Icon from './icon.svelte';

	const actionButtons = [
		{
			icon: 'clarity:email-solid',
			label: 'Email',
			href: '#email'
		},
		{
			icon: 'basil:location-solid',
			label: 'Location',
			href: 'https://www.google.com/maps/place/425+Lafayette+Street,+New+York,+NY,+USA'
		}
	];
</script>

<div class="mx-auto flex w-full flex-col items-center gap-5 bg-black pt-8 pb-5 text-white lg:pt-12">
	<div class="flex size-25 items-center justify-center bg-white">
		<img src="/images/logo-public-theater.webp" alt="Public Theater Logo" class="w-20" />
	</div>

	<div class="flex w-full max-w-96 flex-col items-center gap-2 px-4">
		<h1 class="text-2xl font-bold">Production Department</h1>
		<p class="text-sm">@ The Public Theater</p>
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
