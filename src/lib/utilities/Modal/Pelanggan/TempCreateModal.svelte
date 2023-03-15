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
			const count = await pb.collection('pelanggan').getFullList();
			const id = 'P' + ((count.length).toString().padStart(14, '0'));
			await pb.collection(tipe).create({id:
			id,namaPelanggan: data.namaPelanggan, nomorPelanggan: data.nomorPelanggan, alamatPelanggan: data.alamatPelanggan, keteranganPelanggan: data.keteranganPelanggan}, {status_delete: false});
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
			<span>Nama Supplier</span>
			<input type="text" name="namaPelanggan" placeholder="Nama...">
		</label>
		<label>
			<span>Nomor Supplier</span>
			<input type="number" name="nomorPelanggan" placeholder="Nomor..." />
		</label>
		<label>
			<span>Alamat Supplier</span>
			<input type="text" name="alamatPelanggan" placeholder="Alamat..."  />
		</label>
		<label>
			<span>Keterangan Supplier</span>
			<input type="text" name="keteranganPelanggan" placeholder="Keterangan..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Pelanggan')}
    >Ubah</button>
    </footer>
</div>


