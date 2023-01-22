<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	const storeTab: Writable<string> = writable('Penjualan');
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { GradientHeading } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Returan | SINAR TIMUR SORONG</title>
</svelte:head>

<main>
	<div class="table-container p-8 ">
		<GradientHeading
			tag="h1"
			direction="bg-gradient-to-r"
			from="from-primary-500"
			to="to-secondary-500"
			class="mb-2">Retur {$storeTab}</GradientHeading
		>
		<TabGroup selected={storeTab} class="justify-center">
			<Tab value="Penjualan">Penjualan</Tab>
			<Tab value="Pembelian">Pembelian</Tab>
		</TabGroup>

		{#if $storeTab === 'Penjualan'}
			<h1>PENJUALAN</h1>{/if}
		{#if $storeTab === 'Pembelian'}
			<h1>PEMBELIAN</h1>{/if}
	</div>
</main>
