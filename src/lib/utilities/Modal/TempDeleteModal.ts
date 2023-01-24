import { Modal, modalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
import { triggerToast } from '$lib/utilities/toast';
import PocketBase from 'pocketbase';
import { error } from '@sveltejs/kit';
const pb = new PocketBase('http://127.0.0.1:8090');

export function triggerHapus(tabel, id): void {
	async function hapusBarang() {
		try {
			await pb
				.collection(tabel)
				.getOne(id)
				.then((res) => {
					res.status_delete = true;
					pb.collection('Barang').update(id, res);
				});
			triggerToast(tabel + ' berhasil dihapus', 'primary');
		} catch (err:any) {
			console.log(err.message);
		}
	}
	const confirm: ModalSettings = {
		type: 'confirm',
		title: 'Hapus Barang?',
		body: 'Apakah anda mau menghapus barang?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (r: boolean) => (r === true ? hapusBarang() : null),
		buttonTextCancel: 'Batal',
		buttonTextConfirm: 'Hapus'
	};
	modalStore.trigger(confirm);
}
