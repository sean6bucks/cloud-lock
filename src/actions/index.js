import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { delay } from '../utilities/helpers'
import { mockApi } from '../utilities/mockApi'

// GLOBAL ACTIONS

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
	return {
		type: TYPES.SET_AUTH_TOKEN,
		token
	}
}

export const toggleMenu = () => {
	return {
		type: TYPES.TOGGLE_MENU
	}
}

// USER DATA

export const getUser = id => {
	const request = axios.get( endpoint + '/user' )

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

export const updateUser = ( id, profile ) => {

}

// DOOR ACTIONS

export const getDoors = () => {
	const request = axios.get( endpoint + '/doors' )
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

export const updateUserDoors = ( doors ) => {
	return {
		type: TYPES.UPDATE_USER_DOORS,
		payload: { doors }
	}
}

export const changeListFilter = ( filter ) => {
	return {
		type: TYPES.CHANGE_LIST_FILTER,
		payload: { filter }
	}
}

export const toggleDoor = show => {
	return {
		type: TYPES.TOGGLE_DOOR,
		show
	}
}

export const showDoor = door => {
	return {
		type: TYPES.SHOW_DOOR,
		payload: door
	}
}
export const resetDoor = () => {
	return {
		type: TYPES.RESET_DOOR
	}
}

const changeDoorStatus = status => {
	return {
		type: TYPES.CHANGE_DOOR_STATUS,
		payload: { status }
	}
}
export const unlockDoor = id => {
    const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeDoorStatus('unlocking') );
		request.then(
			({data}) => {
                // TODO: ADD DELAY SETTING FOR DEMO?
				// delay( () => {
				// 	...
				// }, 2000 )

				dispatch({
					type: TYPES.UNLOCK_DOOR,
					payload: { id }
				});
				delay( () => {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 500)
			}
		).catch(
			({error}) => {
				console.log(`
					== ERROR: Unlock Door ==
					${ error }
					========================
				`)
				dispatch( changeDoorStatus('unlock_failed') );
			}
		)
	}
}

export const requestAccess = id => {
	const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeDoorStatus('requesting') );
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.REQUEST_ACCESS,
					payload: id
				});
				delay( ()=> {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 500 )
			}
		).catch(
			({error}) => {
				console.log(`
					== ERROR: Request Access ==
					${ error }
					===========================
				`)
				dispatch( changeDoorStatus('request_failed') );
			}
		)
	}
}

// ADMIN PANEL DATA

export const addDoor = data => {

}

export const updateDoor = id => {

}


// EMPLYEE ACTIONS

export const getEmployees = () => {

}

export const addEmployee = data => {

}

export const updateEmployee = id => {

}
