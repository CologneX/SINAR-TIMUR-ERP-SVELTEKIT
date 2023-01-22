export const load= async () => {
	const userRes = await fetch('https://dummyjson.com/users');
	const userData = await userRes.json();
	const users = userData.users;
	return {
		users: users
	};
};

