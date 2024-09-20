// import { fail, redirect } from '@sveltejs/kit';
// import type { Actions } from './$types';

export function load({ cookies }) {
	//set cookie
	cookies.set('authenticated', true, {
		path: '/'
	});
}

// +page.server.ts
// export const actions: Actions = {
//     default: async ({ request, cookies }) => {
//         const formData = await request.formData();
//         const login = formData.get('login');
//         const password = formData.get('password');

//         if (login == 'admin' && password == '...') {
//             cookies.set(
//                 'auth', '42',
//                 {
//                     path: '/',
//                     maxAge: 60 * 60 * 24 * 365,
//                     httpOnly: false, // <-- if you want to read it in the browser
//                 },
//             );
//             redirect(302, '/');
//         }
//         return fail(400, { error: 'Invalid login or password' });
//     },
// }
