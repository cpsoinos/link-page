<script lang="ts">
	import type { ContactItem, VCardLinkData } from '$lib/types';
	import Icon from './icon.svelte';

	const { contacts, vcard }: { contacts: ContactItem[][]; vcard: VCardLinkData } = $props();

	const downloadVCard = () => {
		fetch(vcard.url)
			.then((response) => response.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = vcard.filename;
				a.click();
			});
	};
</script>

<div class="mx-auto flex w-full max-w-96 flex-col pb-6">
	<div class="flex items-center justify-center py-6 lg:pt-9">
		<button
			class="flex cursor-pointer items-center gap-2.5 p-4 text-[15px] font-bold"
			type="button"
			onclick={downloadVCard}
		>
			<Icon icon={vcard.icon} class="size-5" />
			{vcard.cta}
		</button>
	</div>

	<div class="flex flex-col" id="contacts">
		{#each contacts as group}
			<div class="flex flex-col gap-6 border-gray-200 p-6 not-last-of-type:border-b">
				{#each group as { icon, value, href, description }}
					<div class="flex gap-6">
						<Icon {icon} class="size-5" />
						<div class="flex flex-col gap-1.5">
							<a {href} class="text-[13px] font-semibold">{value}</a>
							{#if description}
								<p class="text-xs text-gray-500">{description}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
