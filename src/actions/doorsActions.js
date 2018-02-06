import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { delay, generateId } from '../utilities/helpers'
import { fetchingComplete } from './dataActions'
import { updateUserDoors, updateUserAccess } from './userActions'
import { updateEmployeesAccess } from './employeesActions'

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
		const employees = getState().employees.map( employee => {
			return  Object.assign({}, employee, { selected: door.permissions.find( id => id === employee.id ) ? true : false });
		});
		dispatch( updateDoorEmployees( employees ) );
	}
}

export const changeDoorName = name => {
	return {
		type: TYPES.UPDATE_DOOR_NAME,
		payload:  { name }
	}
}

export const updateDoorEmployees = employees => {
	return {
		type: TYPES.UPDATE_DOOR_EMPLOYEES,
		payload: { employees }
	}
}

export const updateDoorsPermissions = employees => {
	return (dispatch, getState) => {
		const doors = getState().doors.map( door => {
			const permissions = employees
				.filter( employee => employee.access.includes(door.id) )
				.map( employee => employee.id )
			return Object.assign( {}, door, { permissions } );
		})
		dispatch({
			type: TYPES.UPDATE_DOOR,
			payload: doors
		})
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
				if ( door.id ) {
	                const doors = getState().doors.map( d => {
						return d.id === door.id ? Object.assign( {}, d, {
						 	name: door.name,
							permissions: door.permissions
						}) : d
					})
					dispatch({
						type: TYPES.UPDATE_DOOR,
						payload: doors
					});
				} else {
					door.id = generateId( getState().doors );
					dispatch({
						type: TYPES.ADD_DOOR,
						payload: door
					});
				}
				dispatch( updateEmployeesAccess( getState().doors ) )
				dispatch( updateUserAccess( getState().doors ) )
				delay( () => {
					dispatch( toggleDoor(false) );
					dispatch( resetDoor() );
				}, 500)
			}
		).catch(
			(error) => {
				console.log(`
					== ERROR: Could Not Update Door ==
					${ error }
					==================================
				`)
				dispatch( changeDoorStatus('update_failed') );
			}
		)
	}
}

export const resetDoor = () => {
	return {
		type: TYPES.RESET_DOOR
	}
}
