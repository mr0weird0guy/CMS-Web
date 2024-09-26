import { componentHandler } from '../../store/store';

export const load = async () => {
	const components = componentHandler.getAll();

	let componentList = [];
	components.array.forEach((component) => {
		let item = { ...component.data(), id: component.id };
		componentList = [item, ...componentList];
	});
	return {
		componentList
	};
	// return { authenticated };
};
