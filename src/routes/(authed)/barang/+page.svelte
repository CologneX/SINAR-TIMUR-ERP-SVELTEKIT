<script lang="ts">
	export let data;
	var { barang } = data;

	
	import {
		createDataTableStore,
		dataTableHandler,
		tableInteraction,
		tableA11y
	} from '@skeletonlabs/skeleton';


	import { Paginator } from '@skeletonlabs/skeleton';
	import { GradientHeading } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { triggerHapus } from '$lib/utilities/Modal/TempDeleteModal';
	import { rupiah } from '$lib/utils.js';
	import TempCreateModal from '$lib/utilities/Modal/TempCreateModal.svelte';
	import TempEditModal from '$lib/utilities/Modal/TempEditModal.svelte';
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';
	const pb = new PocketBase('http://127.0.0.1:8090');
	

	const dataTableStore: any = createDataTableStore(
		barang,
		{
			search: '',
			sort: '',
			pagination: { offset: 0, limit: 10, size: 0, amounts: [10, 25, 50, 100] }
		}
	);
	dataTableStore.subscribe((barang) => dataTableHandler(barang));

	//let var tipeHtml from TempCreateModal.svelte = 'barang'
	export let tipeHtml = 'Barang';

	//export tipeHtml to TempCreateModal.svelte
	$: tipeHtml = 'Barang';


	
	function tambahBarang(): void {
		const c: ModalComponent = { ref: TempCreateModal };
		const d: ModalSettings = {
			type: 'component',
			title: 'Masukkan Barang Baru',
			body: 'Informasi Barang Baru',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}


	//Subscribe to changes in barang collection
	onMount(async () => {
		pb.collection('barang').subscribe('*', async ({ action }) => {
		if (action === 'delete' || action === 'create' || action === 'update') { 
			barang = await pb.collection('barang').getFullList(100,{
				filter: 'status_delete=False' 
			});
			dataTableStore.updateSource(barang);
		}});
	});

	function refresh() {
		pb.collection('barang').getFullList(100,{
			filter: 'status_delete=False' 
		}).then((data) => {
			barang = data;
			dataTableStore.updateSource(barang);
		})
	}


	//function to update barang with id
	function updateBarang(id: any) {
		const c: ModalComponent = { ref: TempEditModal};
		const d: ModalSettings = {
			type: 'component',
			title: 'Update Barang '+ barang.find((items) => items.id === id).namaBarang,
			body: 'Informasi Barang',
			meta: { barang: barang.find((items) => items.id === id) },
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r);
			}
		};
		modalStore.trigger(d);
	}
	function hapusBarang(id) {
		triggerHapus('barang', id);
	}
</script>

<svelte:head>
	<title>Barang | SINAR TIMUR SORONG</title>
</svelte:head>

<div class="table-container p-8 ">
	<!-- <a data-sveltekit-reload href="/barang">Path</a> -->
	<GradientHeading
		tag="h1"
		direction="bg-gradient-to-r"
		from="from-primary-500"
		to="to-secondary-500"
		class="mb-2">Barang</GradientHeading
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
			<button class="btn btn-ghost-secondary btn-base" on:click={refresh}
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
			<button class="btn btn-ghost-secondary btn-base" on:click={tambahBarang}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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
				<th data-sort="namaBarang">Nama Barang</th>
				<th data-sort="hargaBarang">Harga</th>
				<th data-sort="stokBarang">Stok</th>
				<th data-sort="lokasiBarang">Lokasi Barang</th>
				<th data-sort="keteranganBarang">Keterangan</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each $dataTableStore.filtered as row, rowIndex}
				<tr class:table-row-checked={row.dataTableChecked}>
					<td class="table-cell-fit">{row.id}</td>
					<td>{row.namaBarang}</td>
					<td>{rupiah(row.hargaBarang)}</td>
					<td>{row.stokBarang}</td>
					<td>{row.lokasiBarang}</td>
					<td>{row.keteranganBarang}</td>
					<td class="table-cell-fit"
						><button class="btn btn-ringed-error btn-sm" on:click={() => hapusBarang(row.id)}
							>Hapus</button
						>
						<button class="btn btn-ringed-warning btn-sm" on:click={() => updateBarang(row.id)}
							>Edit</button>
						</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if $dataTableStore.pagination}<Paginator
			bind:settings={$dataTableStore.pagination}
			class="mt-3"
		/>{/if}
</div>
