<script lang="ts">
	export let data;
	const { users } = data;

	import {
		// Utilities
		createDataTableStore,
		dataTableHandler,
		// Svelte Actions
		tableInteraction,
		tableA11y
	} from '@skeletonlabs/skeleton';

	import { Paginator } from '@skeletonlabs/skeleton';
	import { GradientHeading } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	const dataTableStore = createDataTableStore(
		// Pass your source data here:
		users,
		// Provide optional settings:
		{
			// The current search term.
			search: '',
			// The current sort key.
			sort: '',
			// Paginator component settings.
			pagination: { offset: 0, limit: 10, size: 0, amounts: [10, 25, 50, 100] }
		}
	);
	// This automatically handles search, sort, etc when the model updates.
	dataTableStore.subscribe((users) => dataTableHandler(users));
	// dataTableStore.updateSource(products)

	// modal untuk hapus

	function triggerConfirm(): void {
		const confirm: ModalSettings = {
			type: 'confirm',
			title: 'Hapus Pelanggan?',
			body: 'Apakah anda mau menghapus pelanggan?',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => console.log('response:', r),
			// Optionally override the button text
			buttonTextCancel: 'Batal',
			buttonTextConfirm: 'Hapus'
		};
		modalStore.trigger(confirm);
	}
</script>

<svelte:head>
	<title>Pelanggan | SINAR TIMUR SORONG</title>
</svelte:head>

<div class="table-container p-8 ">
	<!-- <a data-sveltekit-reload href="/barang">Path</a> -->
	<GradientHeading
		tag="h1"
		direction="bg-gradient-to-r"
		from="from-primary-500"
		to="to-secondary-500"
		class="mb-2">Pelanggan</GradientHeading
	>
	<!-- <h1 class="w-1/9 text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Barang</h1> -->
	<div class="grid grid-cols-2 items-center gap-1">
		<input
			bind:value={$dataTableStore.search}
			type="search"
			placeholder="Cari Barang..."
			class="mt-2 mb-2 w-1/2 focus:w-full"
		/>
		<div class="flex justify-end">
			<button class="btn btn-ghost-secondary btn-base"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
					/>
				</svg>
			</button>
			<button class="btn btn-ghost-secondary btn-base" on:click={triggerConfirm}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
					/>
				</svg>
			</button>
		</div>
	</div>
	<table class="table table-hover" use:tableInteraction>
		<thead
			on:click={(e) => {
				dataTableStore.sort(e);
			}}
			on:keypress
		>
			<tr>
				<th data-sort="id">ID</th>
				<th data-sort="firstName">Nama</th>
				<th data-sort="price">Harga</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each $dataTableStore.filtered as row, rowIndex}
				<tr class:table-row-checked={row.dataTableChecked}>
					<td class="table-cell-fit">{row.id}</td>
					<td>{row.firstName}</td>
					<td>{row.image}</td>
					<td class="table-cell-fit"
						><button class="btn btn-ringed-error btn-sm" on:click={triggerConfirm}>Hapus</button
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if $dataTableStore.pagination}<Paginator
			bind:settings={$dataTableStore.pagination}
			class="mt-3"
		/>{/if}
	<Modal />
</div>
