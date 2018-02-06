import { TYPES } from '../constants'
import { mockApi } from '../utilities/mockApi'
import { fetchingComplete } from './dataActions'

// TODO: REPLACE MOCK WITH MOCKABLE/AXIOS
export const login = data => {
    // TODO: REPLACE WITH REAL BACKEND > FOR NOW USE mockApi
	return (dispatch, getState) => {
		mockApi.post('/login', data).then(
			({ token }) => {
				dispatch( setAuthToken(token) );
			}
		)
	}
}

export const logout = () => {
	return (dispatch, getState) => {
		dispatch( setAuthToken(null) );
	}
}

export const setAuthToken = token => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.SET_AUTH_TOKEN,
			token
		});
		dispatch( fetchingComplete('token') );
	}
}
