import { combineReducers } from 'redux'
import { sort } from '../utilities/helpers'

// REDUCER FUNCTIONS
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

const menuReducer = ( prevState=false, { type }) => {
	switch(type) {
		case 'TOGGLE_MENU':
			return !prevState;
		default:
			return prevState
	}
}

const userReducer = ( prevState={
		id: null,
		name: '',
		door_access: [],
		doors: [],
		filter: 'AUTHORIZED'
	}, { type, payload } ) => {
	switch(type) {
		case 'GET_USER_INFO':
			return Object.assign({}, prevState, payload);
		case 'UPDATE_USER_DOORS':
			const doors = payload.doors.map( door => {
				return Object.assign({}, door, {
					authorized: prevState.door_access.includes( door.id )
				})
			})
			return Object.assign({}, prevState, {
				doors: sort( doors, 'name' )
			})
		case 'CHANGE_LIST_FILTER':
			return Object.assign({}, prevState, payload);
		default:
			return prevState
	}
}

const doorListReducer = ( prevState=[], { type, payload }) => {
	switch(type) {
		case 'GET_DOOR_LIST':
			return payload
		default:
			return prevState
	}
}

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
			return Object.assign({}, prevState, payload )
		case 'RESET_LOCK':
			return {}
		case 'CHANGE_LOCK_STATUS':
			return Object.assign({}, prevState, payload )
		case 'UNLOCK_DOOR':
			return Object.assign({}, prevState, { status: 'unlocked' } )
		case 'REQUEST_ACCESS':
			return Object.assign({}, prevState, { status: 'requested' } )
		default:
			return prevState
	}
}

const rootReducer = combineReducers({
	token: tokenReducer,
	open_menu: menuReducer,
	user: userReducer,
	doors: doorListReducer,
	show_lock: toggleLock,
	lock: lockReducer
});

export default rootReducer;
