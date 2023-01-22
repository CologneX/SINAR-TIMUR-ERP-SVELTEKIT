export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};
export const rupiah = (number) => {
	return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

// export async function refreshTabel(tabel) {
// 	tabel = await fetch('http://127.0.0.1:8090/api/collections/barang/records');
// 	tabel = await tabel.json();
// 	tabel = tabel.items;
// 	return tabel;

// }

// export const refreshBarang = (locals) => {
// 	const getBarang = async () => {
// 		try {
// 			const barang = serializeNonPOJOs(await locals.pb.collection('barang').getFullList(200));
// 			return barang;
// 		} catch (err) {
// 			console.log(err.message);
// 			return error(500, err);
// 		}
// 	};
// 	return {
// 		barang: getBarang()
// 	};
// };
