import { combineReducers } from 'redux'

// REDUCER FUNCTIONS

const userReducer = ( prevState={
		id: null,
		name: '',
		door_access: [],
		doors: []
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
				doors
			})
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

const toggleDoor = ( prevState=false, { type, show }) => {
	switch(type) {
		case 'TOGGLE_DOOR':
			return show
		default:
			return prevState
	}
}
const doorReducer = ( prevState={ show: false }, { type, payload }) => {
	switch(type) {
		case 'SHOW_DOOR':
			return Object.assign({}, prevState, { payload })
		case 'RESET_DOOR':
			return { show: prevState.show }
		default:
			return prevState
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	doors: doorListReducer,
	show_door: toggleDoor,
	door: doorReducer
});

export default rootReducer;
