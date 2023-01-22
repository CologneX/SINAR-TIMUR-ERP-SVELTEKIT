<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;
	// Stores
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { triggerToast } from '$lib/utilities/toast';
	import PocketBase from 'pocketbase';
	const pb = new PocketBase('http://127.0.0.1:8090');

	export function onFormSubmit(tipe) {
		const form = document.querySelector('.modal-form');
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		try {
			pb.collection('barang').create(
				data,
				{ status_delete: 0 } && {keteranganBarang : data.keteranganBarang || '-'}

			);
			triggerToast(tipe + ' sudah ditambahkan', 'primary');
			modalStore.close();
		} catch (err: any) {
			console.log(err.message);
		}
	}
	// Base Classes
	const cBase = 'space-y-4';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

<div class="modal-example-form {cBase}">
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="modal-form {cForm}" method="POST">
		<label>
			<span>Nama Barang</span>
			<input type="text" name="namaBarang" placeholder="Nama..." />
		</label>
		<label>
			<span>Stok Barang</span>
			<input type="number" name="stokBarang" placeholder="Stok..." />
		</label>
		<label>
			<span>Harga Barang</span>
			<input type="number" name="hargaBarang" placeholder="Harga..." />
		</label>
		<label>
			<span>Lokasi Barang</span>
			<select name="lokasiBarang">
				<option value="Toko">Toko</option>
				<option value="Gudang">Gudang</option>
			</select>
		</label>
		<label>
			<span>Keterangan Barang</span>
			<input type="text" name="keteranganBarang" placeholder="Keterangan..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Barang')}>Tambah</button>
    </footer>
</div>
