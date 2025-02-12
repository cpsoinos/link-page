<script lang="ts" module>
	interface ContactItem {
		icon: string;
		value: string;
		href: string;
		description?: string;
	}
</script>

<script lang="ts">
	import Icon from './icon.svelte';

	const contacts: ContactItem[][] = [
		[
			{
				icon: 'clarity:email-line',
				value: 'SceneryDepartment@publictheater.org',
				href: 'mailto:SceneryDepartment@publictheater.org',
				description: 'Scenery'
			},
			{
				icon: 'clarity:email-line',
				value: 'PropsDepartment@publictheater.org',
				href: 'mailto:PropsDepartment@publictheater.org',
				description: 'Props'
			},
			{
				icon: 'clarity:email-line',
				value: 'LightingDepartment@publictheater.org',
				href: 'mailto:LightingDepartment@publictheater.org',
				description: 'Lighting'
			},
			{
				icon: 'clarity:email-line',
				value: 'AudioDepartment@publictheater.org',
				href: 'mailto:AudioDepartment@publictheater.org',
				description: 'Audio'
			},
			{
				icon: 'clarity:email-line',
				value: 'CostumesDepartment@publictheater.org',
				href: 'mailto:CostumesDepartment@publictheater.org',
				description: 'Costumes'
			},
			{
				icon: 'clarity:email-line',
				value: 'VideoDepartment@publictheater.org',
				href: 'mailto:VideoDepartment@publictheater.org',
				description: 'Video'
			},
			{
				icon: 'clarity:email-line',
				value: 'ProductionManagement@publictheater.org',
				href: 'mailto:ProductionManagement@publictheater.org',
				description: 'Production Management'
			}
		],
		[
			{
				icon: 'mdi:web',
				value: 'https://publictheater.org',
				href: 'https://publictheater.org'
			}
		],
		[
			{
				icon: 'basil:location-outline',
				value: '425 Lafayette Street, New York, NY, USA',
				href: 'https://www.google.com/maps/place/425+Lafayette+Street,+New+York,+NY,+USA',
				description: 'Show on map'
			}
		],
		[
			{
				icon: 'skill-icons:instagram',
				value: 'Instagram',
				href: 'https://www.instagram.com/publictheaterny',
				description: '@publictheaterny'
			}
		]
	];

	const downloadVCard = () => {
		fetch('/vcards/public-theater-production-department.vcf')
			.then((response) => response.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = 'Public Theater Production.vcf';
				a.click();
			});
	};
</script>

<div class="mx-auto flex w-full max-w-96 flex-col pb-6">
	<div class="flex items-center justify-center py-6 lg:pt-9">
		<button
			class="flex items-center gap-2.5 p-4 text-[15px] font-bold"
			type="button"
			onclick={downloadVCard}
		>
			<Icon icon="gravity-ui:person-plus" class="size-5" />
			Add to Contacts
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

		<!-- <div class="flex flex-col gap-6">
			<h2 class="text-center text-sm text-gray-700">Social</h2>
		</div> -->
	</div>
</div>
