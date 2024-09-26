import { load } from '../../+page.server';
import { componentHandler } from '../../../store/store.js';

export function load({ params }) {
	const component = componentHandler.get(params);

	return {
		props: {
			component
		}
	};
}
