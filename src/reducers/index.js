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
		console.log('USER', prevState);
			return prevState
	}
}

const doorListReducer = ( prevState=[], { type, payload }) => {
	switch(type) {
		case 'GET_DOOR_LIST':
			return payload
		default:
			return prevState;
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	doors: doorListReducer
});

export default rootReducer;
