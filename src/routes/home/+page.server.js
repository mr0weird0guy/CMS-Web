import { componentHandler } from '../../store/store';

export async function load({ params }) {
	const componentList = await componentHandler.getAll();
	// console.log(componentList);
	return {
		componentList
	};
}
