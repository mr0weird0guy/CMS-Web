import { historyHandler, userHandler } from '../../store/store';

export async function load({ params }) {
	const historyList = await historyHandler.getAll();
	const userList = await userHandler.getAll();

	historyList.sort((a, b) => new Date(a.BookedOn) - new Date(b.BookedOn));
	return {
		historyList,
		userList
	};
}
