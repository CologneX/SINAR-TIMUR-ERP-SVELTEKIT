<script lang="ts">
	export let parent: any;
	// Stores
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { triggerToast } from '$lib/utilities/toast';
	import PocketBase from 'pocketbase';
	const pb = new PocketBase('http://127.0.0.1:8090');

	export async function onFormSubmit(tipe) {
		try {
			const form = document.querySelector('.modal-form');
			const formData = new FormData(form as HTMLFormElement);
			const data = Object.fromEntries(formData);
			const count = await pb.collection('barang').getFullList();
			const id = 'B' + ((count.length).toString().padStart(14, '0'));
			await pb.collection(tipe).create({id:
			id,namaBarang: data.namaBarang, stokBarang: data.stokBarang, hargaBarang: data.hargaBarang, lokasiBarang: data.lokasiBarang, keteranganBarang: data.keteranganBarang, satuanBarang:data.satuanBarang}, {status_delete: false});
			triggerToast(tipe + ' sudah ditambahkan', 'primary');
			modalStore.close();
		} 
		catch (err: any) {
			console.log(err.message);
		}
	}
	// Base Classes
	const cBase = 'space-y-4';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>


<div class="modal-example-form {cBase}">
	<form class="modal-form {cForm}" method="POST">
		<label>
			<span>Nama Barang</span>
			<input type="text" name="namaBarang" placeholder="Nama...">
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
			<select name="lokasiBarang" >
				<option value="Toko">Toko</option>
				<option value="Gudang">Gudang</option>
			</select>
		</label>
		<label>
			<span>Satuan Barang</span>
			<select name="satuanBarang" >
				<option value="METER">METER</option>
				<option value="PCS">PCS</option>
				<option value="LITER">LITER</option>
				<option value="DOZEN">DOZEN</option>
				<option value="DUS">DUS</option>
				<option value="KG">KG</option>
		</label>
		<label>
			<span>Keterangan Barang</span>
			<input type="text" name="keteranganBarang" placeholder="Keterangan..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Barang')}
    >Tambah</button>
    </footer>
</div>


