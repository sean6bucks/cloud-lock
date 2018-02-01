import { TYPES } from '../constants'

// GLOBAL ACTIONS

export const login = data => {

}

// USER DATA

export const getUser = id => {
	return {
		type: 'GET_USER_INFO',
		id
	}
}

export const updateUser = ( id, profile ) => {

}

export const unlockDoor = id => {

}

export const requestPermission = id => {

}

// ADMIN PANEL DATA

export const getDoorList = () => {
	return {
		type: TYPES.GET_DOOR_LIST
	}
}

export const showDoor = id => {

}

export const addDoor = data => {

}

export const updateDoor = id => {

}

export const getEmployeeList = () => {

}

export const showEmployee = id => {

}

export const addEmployee = data => {

}

export const updateEmployee = id => {

}
