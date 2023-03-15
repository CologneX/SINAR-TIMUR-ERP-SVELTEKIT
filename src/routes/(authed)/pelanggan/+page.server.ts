import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
export const load = ({ locals }) => {
	const getPelanggan = async () => {
		try {
			const pelanggan = serializeNonPOJOs(
				await locals.pb.collection('pelanggan').getFullList(100, {
					filter: 'status_delete=False'
				})
			);
			return pelanggan;
		} catch (err:any) {
			console.log(err.message);
			return error(500, err);
		}
	};
	return {
		pelanggan: getPelanggan()
	};
};
