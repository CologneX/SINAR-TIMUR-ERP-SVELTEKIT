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
			const count = await pb.collection('supplier').getFullList();
			const id = 'S' + ((count.length).toString().padStart(14, '0'));
			await pb.collection(tipe).create({id:
			id,namaSupplier: data.namaSupplier, alamatSupplier: data.alamatSupplier, nomorSupplier: data.nomorSupplier}, {status_delete: false});
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
			<span>Keterangan Barang</span>
			<input type="text" name="keteranganBarang" placeholder="Keterangan..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Barang')}
    >Ubah</button>
    </footer>
</div>


<div class="modal-example-form {cBase}">
	<form class="modal-form {cForm}" method="POST">
		<label>
			<span>Nama Supplier</span>
			<input type="text" name="namaSupplier" placeholder="Nama...">
		</label>
		<label>
			<span>Nomor Supplier</span>
			<input type="number" name="nomorSupplier" placeholder="Nomor..." />
		</label>
		<label>
			<span>Alamat Supplier</span>
			<input type="text" name="alamatSupplier" placeholder="Alamat..."  />
		</label>
		<label>
			<span>Keterangan Supplier</span>
			<input type="text" name="keteranganSupplier" placeholder="Keterangan..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Supplier')}
    >Ubah</button>
    </footer>
</div>


