import { load } from '../../+page.server';
import { componentHandler } from '../../../store/store.js';

export async function load({ params }) {
	const sanitizedCompId = params.compId.replace('$', '');
	const component = await componentHandler.get(sanitizedCompId);
	// console.log(sanitizedCompId);
	// console.log(component);
	return {
		component
	};
}
