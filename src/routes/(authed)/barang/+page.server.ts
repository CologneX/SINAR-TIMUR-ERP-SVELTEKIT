import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { onMount } from 'svelte';
export const load = ({ locals }) => {
	const getBarang = async () => {
		try {
			const barang = serializeNonPOJOs(
				await locals.pb.collection('barang').getFullList(100, {
					filter: 'status_delete=False'
				})
			);
			return barang;
		} catch (err:any) {
			console.log(err.message);
			return error(500, err);
		}
	};
	return {
		barang: getBarang()
	};
};
