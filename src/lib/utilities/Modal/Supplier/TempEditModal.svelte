<script lang="ts">
	/** Exposes parent props to this component. */
	export let parent: any;
	// Stores
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { triggerToast } from '$lib/utilities/toast';
	import PocketBase from 'pocketbase';
	const pb = new PocketBase('http://127.0.0.1:8090');
    const data = $modalStore[0].meta?.barang;
	export async function onFormSubmit(tipe,id) {
       
		const form = document.querySelector('.modal-form');
		const formData = new FormData(form as HTMLFormElement);
		const data = Object.fromEntries(formData);
		try {
			await pb.collection(tipe).update(id, data);
			triggerToast(tipe + ' sudah diedit', 'primary');
			modalStore.close();
		} catch (err: any) {
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
			<input type="text" name="namaBarang" placeholder="Nama..." value="{data.namaBarang}" disabled>
		</label>
		<label>
			<span>Stok Barang</span>
			<input type="number" name="stokBarang" placeholder="Stok..." value="{data.stokBarang}"/>
		</label>
		<label>
			<span>Harga Barang</span>
			<input type="number" name="hargaBarang" placeholder="Harga..." value="{data.hargaBarang}" />
		</label>
		<label>
			<span>Lokasi Barang</span>
			<select name="lokasiBarang" value="{data.lokasiBarang}">
				<option value="Toko">Toko</option>
				<option value="Gudang">Gudang</option>
			</select>
		</label>
		<label>
			<span>Keterangan Barang</span>
			<input type="text" name="keteranganBarang" placeholder="Keterangan..." value="{data.keteranganBarang}"/>
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Barang',data.id)}
    >Ubah</button>
    </footer>
</div>

<div class="modal-example-form {cBase}">
	<form class="modal-form {cForm}" method="POST">
		<label>
			<span>Nama Barang</span>
			<input type="text" name="namaSupplier" placeholder="Nama..." value="{data.namaSupplier}" disabled>
		</label>
		<label>
			<span>Stok Barang</span>
			<input type="number" name="nomorSupplier" placeholder="Nomor..." value="{data.nomorSupplier}"/>
		</label>
		<label>
			<span>Harga Barang</span>
			<input type="text" name="alamatSupplier" placeholder="Alamat..." value="{data.alamatSupplier}" />
		</label>
		<label>
			<span>Keterangan Barang</span>
			<input type="text" name="keteranganSupplier" placeholder="Keterangan..." value="{data.keteranganSupplier}"/>
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" type="submit" on:click={()=>onFormSubmit('Supplier',data.id)}
    >Ubah</button>
    </footer>
</div>



