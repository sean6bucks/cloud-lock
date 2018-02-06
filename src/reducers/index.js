import { combineReducers } from 'redux'
import { sort } from '../utilities/helpers'

// TOKEN / AUTH
const tokenReducer = ( prevState=null, { type, token }) => {
	switch(type) {
		case 'SET_AUTH_TOKEN':
			if ( token ) {
				localStorage.setItem('cLock_token', token);
			} else {
				localStorage.removeItem('cLock_token');
			}
			return token;
		default:
			return prevState
	}
}

const initialFetching = {
	token: true,
	user: true,
	doors: true,
	employees: true,
	events: true
}
const fetchingReducer = ( prevState=initialFetching, { type, value } ) => {
	switch(type) {
		case 'FETCHING_COMPLETE':
			return Object.assign({}, prevState, { [value]: false });
		case 'RESET_FETCHING':
			return {
				user: true,
				doors: true,
				employees: true,
				events: true
			}
		default:
			return prevState
	}
}

// USER

const userReducer = ( prevState={
		id: null,
		name: '',
		door_access: [],
		doors: [],
		filter: 'AUTHORIZED'
	}, { type, payload } ) => {
	switch(type) {
		case 'GET_USER_INFO':
		case 'UPDATE_USER':
		case 'CHANGE_LIST_FILTER':
			return Object.assign({}, prevState, payload);
		case 'UPDATE_USER_DOORS':
			const doors = payload.doors.map( door => {
				return Object.assign({}, door, {
					authorized: prevState.access.includes( door.id )
				})
			})
			return Object.assign({}, prevState, {
				doors: sort( doors, 'name' )
			})
		case 'RESET_USER':
			return {}
		default:
			return prevState
	}
}

// MENU

const menuReducer = ( prevState=false, { type }) => {
	switch(type) {
		case 'TOGGLE_MENU':
			return !prevState;
		default:
			return prevState
	}
}

// LOCK

const toggleLock = ( prevState=false, { type, show }) => {
	switch(type) {
		case 'TOGGLE_LOCK':
			return show
		default:
			return prevState
	}
}
const lockReducer = ( prevState={}, { type, payload }) => {
	switch(type) {
		case 'SHOW_LOCK':
		case 'CHANGE_LOCK_STATUS':
		case 'UNLOCK_DOOR':
		case 'REQUEST_ACCESS':
			return Object.assign({}, prevState, payload )
		case 'RESET_LOCK':
			return {}
		default:
			return prevState
	}
}

// DOORS

const doorsReducer = ( prevState=[], { type, payload }) => {
	switch(type) {
		case 'GET_DOOR_LIST':
		case 'UPDATE_DOOR':
			return payload
		case 'ADD_DOOR':
			return [ ...prevState, payload ]
		default:
			return prevState
	}
}

// DOOR

const toggleDoor = ( prevState=false, { type, show }) => {
	switch(type) {
		case 'TOGGLE_DOOR':
			return show
		default:
			return prevState
	}
}
const getPermissionIds = employees => {
	return employees
		.filter( employee => employee.selected )
		.map( employee => employee.id );
}
const doorReducer = ( prevState={}, { type, payload }) => {
	switch(type) {
		case 'SHOW_DOOR':
		case 'UPDATE_DOOR_NAME':
		case 'CHANGE_DOOR_STATUS':
			return Object.assign({}, prevState, payload )
		case 'UPDATE_DOOR_EMPLOYEES':
			return Object.assign({}, prevState, {
				employees: payload.employees,
			 	permissions: getPermissionIds( payload.employees )
			})
		case 'RESET_DOOR':
			return {}
		default:
			return prevState
	}
}

// EMPLOYEES

const employeesReducer = ( prevState=[], { type, payload }) => {
	switch(type) {
		case 'GET_EMPLOYEE_LIST':
		case 'UPDATE_EMPLOYEE':
			return payload
		case 'ADD_EMPLOYEE':
			return [ ...prevState, payload ]
		default:
			return prevState
	}
}

// EMPLOYEE

const toggleEmployee = ( prevState=false, { type, show }) => {
	switch(type) {
		case 'TOGGLE_EMPLOYEE':
			return show
		default:
			return prevState
	}
}
const getAccessIds = doors => {
	return doors
		.filter( door => door.selected )
		.map( door => door.id );
}
const employeeReducer = ( prevState={}, { type, payload }) => {
	switch(type) {
		case 'SHOW_EMPLOYEE':
		case 'UPDATE_EMPLOYEE_NAME':
		case 'CHANGE_EMPLOYEE_STATUS':
			return Object.assign({}, prevState, payload )
		case 'UPDATE_EMPLOYEE_DOORS':
			return Object.assign({}, prevState, {
				doors: payload.doors,
			 	access: getAccessIds( payload.doors )
			})
		case 'RESET_EMPLOYEE':
			return {}
		default:
			return prevState
	}
}


// EVENTS & FILTER

const eventsReducer = ( prevState=[], { type, payload }) => {
	switch(type) {
		case 'GET_EVENTS_LIST':
		case 'UPDATE_EVENTS_LIST':
			return payload
		default:
			return prevState
	}
}

const eventFilterReducer = ( prevState=null, { type, id }) => {
	switch(type) {
		case 'CHANGE_EVENT_FILTER':
			return id
		default:
			return prevState
	}
}

const rootReducer = combineReducers({
	token: tokenReducer,
	fetching: fetchingReducer,
	open_menu: menuReducer,
	user: userReducer,
	show_lock: toggleLock,
	lock: lockReducer,
	show_door: toggleDoor,
	doors: doorsReducer,
	door: doorReducer,
	show_employee: toggleEmployee,
	employees: employeesReducer,
	employee: employeeReducer,
	events: eventsReducer,
	event_filter: eventFilterReducer
});

export default rootReducer;
