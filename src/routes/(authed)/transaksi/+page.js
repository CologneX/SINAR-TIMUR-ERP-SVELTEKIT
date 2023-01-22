export const load= async () => {
//  fetch and return from 'https://dummyjson.com/carts'
	const cartRes = await fetch('https://dummyjson.com/carts');
	const cartData = await cartRes.json();	
	const carts = cartData.carts;

	// const 
	return {
		carts:carts
	};






	// const userRes = await fetch('https://dummyjson.com/carts');
	// const userData = await userRes.json();
	// const users = userData;
	// console.log(users);
	// return {
	// 	users:users
		
	// };
};

