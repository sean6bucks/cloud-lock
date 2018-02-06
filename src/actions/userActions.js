import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { getDoors } from './doorsActions'
import { getEmployees } from './employeesActions'
import { fetchingComplete } from './dataActions'

export const getUser = id => {
	const request = axios.get( endpoint + '/user' )
	return (dispatch, getState) => {
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.GET_USER_INFO,
					payload: data
				});
				dispatch( fetchingComplete('user') );
				dispatch( getDoors() );
				dispatch( getEmployees() );
			}
		)
	}
}

export const updateUserDoors = ( doors ) => {
	return {
		type: TYPES.UPDATE_USER_DOORS,
		payload: { doors }
	}
}

export const updateUserAccess = ( doors ) => {
	return (dispatch, getState) => {
		const access = doors
			.filter( door => door.permissions.includes( getState().user.id ) )
			.map( door => door.id )
		dispatch( updateUser({ access }) );
	}
}

export const updateUser = payload => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.UPDATE_USER,
			payload: payload
		})
		dispatch( updateUserDoors( getState().doors ) );
	}
}

export const changeListFilter = ( filter ) => {
	return {
		type: TYPES.CHANGE_LIST_FILTER,
		payload: { filter }
	}
}

export const resetUser = () => {
	return {
		type: TYPES.RESET_USER
	}
}
