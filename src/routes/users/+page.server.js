import { load } from '../+page.server.js';
import { userHandler } from '../../store/store.js';

export async function load() {
	const users = await userHandler.getAll();

	// console.log(users);
	return {
		users
	};
}
