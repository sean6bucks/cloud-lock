import axios from 'axios'
import { TYPES } from '../constants'
import { mockApi } from '../config/endpoints'

// GLOBAL ACTIONS

export const login = data => {

}

// USER DATA

export const getUser = id => {
	const request = axios.get( mockApi + '/user' )

	return (dispatch, getState) => {
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.GET_USER_INFO,
					payload: data
				})
			}
		).then( () => {
			dispatch( getDoors() );
		})
	}
}

export const updateUserDoors = doors => {
	return{
		type: TYPES.UPDATE_USER_DOORS,
		payload: { doors }
	}
}

export const updateUser = ( id, profile ) => {

}

export const unlockDoor = id => {

}

export const requestPermission = id => {

}

// ADMIN PANEL DATA

export const getDoors = () => {
	const request = axios.get( mockApi + '/doors' )
	return (dispatch, getState) => {
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.GET_DOOR_LIST,
					payload: data.doors
				});
				dispatch( updateUserDoors( data.doors ) );
			}
		)
	}
}

export const addDoor = data => {

}

export const updateDoor = id => {

}

export const getEmployees = () => {

}

export const addEmployee = data => {

}

export const updateEmployee = id => {

}
