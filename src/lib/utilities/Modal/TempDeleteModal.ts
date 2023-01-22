import { Modal, modalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
import { triggerToast } from '$lib/utilities/toast';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export function triggerHapus(tabel, id) {
	const confirm: ModalSettings = {
		type: 'confirm',
		title: 'Hapus Barang?',
		body: 'Apakah anda mau menghapus barang?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (r: boolean) =>
			(r === true ? pb.collection(tabel).delete(id) : null) &&
			(r === true ? triggerToast('Barang berhasil dihapus', 'primary') : null),
		buttonTextCancel: 'Batal',
		buttonTextConfirm: 'Hapus',
	};
	modalStore.trigger(confirm);

}
