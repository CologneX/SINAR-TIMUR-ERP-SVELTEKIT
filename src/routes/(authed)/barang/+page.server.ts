import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
export const load = ({ locals }) => {
	const getBarang = async () => {
		try {
			const barang = serializeNonPOJOs(await locals.pb.collection('barang').getFullList());
			return barang;
		} catch (err) {
			console.log(err.message);
			return error(500, err);
		}
	};
	return {
		barang: getBarang()
	};
};

//subscribe to server side events from pocketbase collection server using the subscribe method
