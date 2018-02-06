import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { delay, newEvent } from '../utilities/helpers'
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
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.SET_AUTH_TOKEN,
			token
		});
		dispatch( fetchingComplete('token') );
	}
}

export const toggleMenu = () => {
	return {
		type: TYPES.TOGGLE_MENU
	}
}

// FETCH DATA

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
			}
		).then( () => {
			dispatch( getDoors() );
			dispatch( getEmployees() );
		})
	}
}

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
				dispatch( fetchingComplete('doors') );
			}
		)
	}
}

export const getEmployees = () => {
	const request = axios.get( endpoint + '/employees' )
	return (dispatch, getState) => {
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.GET_EMPLOYEE_LIST,
					payload: data.employees
				});
				dispatch( fetchingComplete('employees') );
			}
		)
	}
}

export const getEventsList = () => {
	const request = axios.get( endpoint + '/events' )
	return (dispatch, getState) => {
		request.then(
			({data}) => {
				const events = data.events.map( event => {
					const user = getState().employees.find( employee => employee.id === event.user );
					const door = getState().doors.find( door => door.id === event.door );
					return Object.assign( {}, event, {
						user,
						door
					})
				})
				dispatch({
					type: TYPES.GET_EVENTS_LIST,
					payload: events
				});
				dispatch( fetchingComplete('events') );
			}
		)
	}
}


const fetchingComplete = value => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.FETCHING_COMPLETE,
			value
		});
		const fetching = getState().fetching;
		if( fetching.events && !fetching.doors && !fetching.employees ) {
			dispatch( getEventsList() );
		}
	}
}

// DOOR / LOCK ACTIONS

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

export const toggleLock = show => {
	return {
		type: TYPES.TOGGLE_LOCK,
		show
	}
}

export const showLock = door => {
	return {
		type: TYPES.SHOW_LOCK,
		payload: door
	}
}
export const resetLock = () => {
	return {
		type: TYPES.RESET_LOCK
	}
}

const changeLockStatus = status => {
	return {
		type: TYPES.CHANGE_LOCK_STATUS,
		payload: { status }
	}
}
export const unlockDoor = id => {
    const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeLockStatus('unlocking') );
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.UNLOCK_DOOR,
					payload: { id }
				});
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'unlock', getState().lock ) );
				delay( () => {
					dispatch( toggleLock(false) );
					dispatch( resetLock() );
				}, 500)
			}
		).catch(
			(error) => {
				console.log(`
					== ERROR: Unlock Door ==
					${ error }
					========================
				`)
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'unlock_failed', getState().lock ) );
				dispatch( changeLockStatus('unlock_failed') );
			}
		)
	}
}

export const requestAccess = id => {
	const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeLockStatus('requesting') );
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.REQUEST_ACCESS,
					payload: id
				});
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'request', getState().lock ) );
				delay( ()=> {
					dispatch( toggleLock(false) );
					dispatch( resetLock() );
				}, 500 )
			}
		).catch(
			({error}) => {
				console.log(`
					== ERROR: Request Access ==
					${ error }
					===========================
				`)
				dispatch( changeLockStatus('request_failed') );
			}
		)
	}
}

// ADMIN PANEL DATA

export const toggleDoor = show => {
	return {
		type: TYPES.TOGGLE_DOOR,
		show
	}
}

export const showDoor = door => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.SHOW_DOOR,
			payload: door
		});
		dispatch( setDoorEmployees(door) );
	}
}
const setDoorEmployees = door => {
	return (dispatch, getState) => {
		const employees = door.permissions.map( id => {
			const employee = getState().employees.find( emp => emp.id === id )
			return Object.assign({}, employee, { selected: true });
		});
		dispatch( updateDoorEmployees( employees ) );
	}
}

export const updateDoorEmployees = employees => {
	return {
		type: TYPES.UPDATE_DOOR_EMPLOYEES,
		payload: { employees }
	}
}

export const changeDoorStatus = status => {
	return {
		type: TYPES.CHANGE_DOOR_STATUS,
		payload: { status }
	}
}

export const updateDoor = door => {
    const request = axios.post( endpoint + '/door', {
		id: door.id,
	 	data: door
	})
	return (dispatch, getState) => {
		dispatch( changeDoorStatus('updating') );
		request.then(
			({data}) => {
                const doors = getState().doors.map( d => {
					return d.id === door.id ? Object.assign( {}, d, door ) : d
				})
				dispatch({
					type: TYPES.UPDATE_DOOR_LIST,
					payload: doors
				});
				dispatch( updateUserDoors(doors) )
				delay( () => {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 500)
			}
		).catch(
			({error}) => {
				console.log(`
					== ERROR: Could Not Update Door ==
					${ error }
					==================================
				`)
				dispatch( changeLockStatus('update_failed') );
			}
		)
	}
}

export const resetDoor = () => {
	return {
		type: TYPES.RESET_DOOR
	}
}

// EMPLOYEE ACTIONS

export const addEmployee = data => {

}

export const updateEmployee = id => {

}

// EVENT LIST actions

export const updateEventsList = events => {
	return {
			type: TYPES.UPDATE_EVENTS_LIST,
			payload: events
	}
}

export const addEvent = (type, door) => {
	return (dispatch, getState) => {
		const events = getState().events;
		const event = newEvent({
			type,
			door,
			user: getState().user
		})
		events.unshift(event);
		dispatch({
			type: TYPES.UPDATE_EVENTS_LIST,
			payload: events
		});
	}
}
