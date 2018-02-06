import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { delay, generateId } from '../utilities/helpers'
import { fetchingComplete } from './dataActions'
import { updateUser } from './userActions'
import { updateDoorsPermissions } from './doorsActions'

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

export const toggleEmployee = show => {
	return {
		type: TYPES.TOGGLE_EMPLOYEE,
		show
	}
}

export const showEmployee = employee => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.SHOW_EMPLOYEE,
			payload: employee
		});
		dispatch( setEmployeeDoors(employee) );
	}
}

const setEmployeeDoors = employee => {
	return (dispatch, getState) => {
		const doors = getState().doors.map( door => {
			return  Object.assign({}, door, { selected: employee.access.find( id => id === door.id ) ? true : false });
		});
		dispatch( updateEmployeeDoors( doors ) );
	}
}

export const changeEmployeeName = name => {
	return {
		type: TYPES.UPDATE_EMPLOYEE_NAME,
		payload:  { name }
	}
}

export const updateEmployeeDoors = doors => {
	return {
		type: TYPES.UPDATE_EMPLOYEE_DOORS,
		payload: { doors }
	}
}

export const updateEmployeesAccess = doors => {
	return (dispatch, getState) => {
		const employees = getState().employees.map( employee => {
			const access = doors
				.filter( door => door.permissions.includes(employee.id) )
				.map( door => door.id )
			return Object.assign( {}, employee, { access } );
		})
		dispatch({
			type: TYPES.UPDATE_EMPLOYEE,
			payload: employees
		})
	}
}

export const changeEmployeeStatus = status => {
	return {
		type: TYPES.CHANGE_EMPLOYEE_STATUS,
		payload: { status }
	}
}

export const updateEmployee = employee => {
    const request = axios.post( endpoint + '/employee', {
		id: employee.id,
	 	data: employee
	})
	return (dispatch, getState) => {
		dispatch( changeEmployeeStatus('updating') );
		request.then(
			({data}) => {
                // IF UPDATING > UPDATE EMPLOYEE
				if ( employee.id ) {
					const employees = getState().employees.map( emp => {
						return emp.id === employee.id ? Object.assign( {}, emp, {
						 	name: employee.name,
							access: employee.access
						}) : emp
					})
					dispatch({
						type: TYPES.UPDATE_EMPLOYEE,
						payload: employees
					});
					if ( employee.id === getState().user.id )
						dispatch( updateUser( employee ) )
                // IF NEW > JUST ADD EMPLOYEE
				} else {
					employee.id = generateId( getState().employees );
					dispatch({
						type: TYPES.ADD_EMPLOYEE,
						payload: employee
					});
				}
				dispatch( updateDoorsPermissions( getState().employees ) );
				delay( () => {
					dispatch( toggleEmployee(false) );
					dispatch( resetEmployee() );
				}, 500)
			}
		).catch(
			(error) => {
				console.log(`
					== ERROR: Could Not Update Employee ==
					${ error }
					==================================
				`)
				dispatch( changeEmployeeStatus('update_failed') );
			}
		)
	}
}

export const resetEmployee = () => {
	return {
		type: TYPES.RESET_EMPLOYEE
	}
}
