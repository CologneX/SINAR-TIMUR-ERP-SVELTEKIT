import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
export const load = ({ locals }) => {
	const getSupplier = async () => {
		try {
			const supplier = serializeNonPOJOs(
				await locals.pb.collection('supplier').getFullList(100, {
					filter: 'status_delete=False'
				})
			);
			return supplier;
		} catch (err:any) {
			console.log(err.message);
			return error(500, err);
		}
	};
	return {
		supplier: getSupplier()
	};
};
