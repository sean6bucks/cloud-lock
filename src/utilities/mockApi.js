import { delay } from './helpers'


const generate_token = (len) => {
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let token = '';
	const x = (left, text="") => {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
		if ( left <= 0 ) {
			token = text;
			return;
		}
		x(left-1, text);
	}
	x(len);
	return token;
}

// CREATE MOCK API ENDPOINTS WITH 1 SECOND DATA FETCHING DELAY
export const mockApi = {
	post: (route, data) => {
		return new Promise( (resolve, reject) => {
			delay(() => {
				const response = {}
				switch(route) {
					case '/login':
						response.token = generate_token(24);
						resolve( response );
						break;
					default:
						reject({
							code: 400,
							msg: 'Bad Request'
						})
				}
			}, 1000 )
		})
	}
}
//
// const generate_uid = () => {
// 	const s4 = () => {
// 		return Math.floor((1 + Math.random()) * 0x10000)
// 			.toString(16)
// 			.substring(1);
// 	}
// 	return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
// }
