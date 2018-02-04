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

export const updateUser = ( id, profile ) => {

}

// DOOR ACTIONS

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
		type: 'RESET_DOOR'
	}
}

const changeDoorStatus = status => {
	return {
		type: TYPES.CHANGE_DOOR_STATUS,
		payload: { status }
	}
}
export const unlockDoor = id => {
    // TODO: BUILD GLOBAL API DELAY
    // SIMULATE API CALL TIME
	return (dispatch, getState) => {
		dispatch( changeDoorStatus('unlocking') );
		setTimeout(()=>{
			dispatch({
				type: 'UNLOCK_DOOR',
				payload: { id }
			});
			if ( getState().door.status === 'unlocked' ) {
				setTimeout( ()=> {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 500 )
			}
		}, 2000 );
	}
}

export const requestAccess = door => {
	// TODO: BUILD GLOBAL API DELAY
	return (dispatch, getState) => {
		dispatch( changeDoorStatus('requesting') );
		setTimeout(()=>{
			dispatch({
				type: 'REQUEST_ACCESS',
				payload: door
			});
			if ( getState().door.status === 'requested' ) {
				setTimeout( ()=> {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 1000 )
			}
		}, 2000 );
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
