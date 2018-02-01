import { combineReducers } from 'redux'
// TODO: DELETE AND REPLACE WITH API CALL
import { DATA } from '../constants'

// REDUCER FUNCTIONS

const userReducer = ( prevState={}, { type, id } ) => {
	switch(type) {
		case 'GET_USER_INFO':
			return DATA.user
		default:
			return prevState
	}
}

const doorListReducer = ( prevState=[], { type }) => {
	switch(type) {
		case 'GET_DOOR_LIST':
			return DATA.doors
		default:
			return prevState;
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	doors: doorListReducer
});

export default rootReducer;
