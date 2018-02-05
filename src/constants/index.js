export const TYPES = {
	SET_AUTH_TOKEN: 'SET_AUTH_TOKEN',
	GET_USER_INFO: 'GET_USER_INFO',
	GET_DOOR_LIST: 'GET_DOOR_LIST',
	UPDATE_USER_DOORS: 'UPDATE_USER_DOORS',
	CHANGE_LIST_FILTER: 'CHANGE_LIST_FILTER',
	TOGGLE_DOOR: 'TOGGLE_DOOR',
	SHOW_DOOR: 'SHOW_DOOR',
	HIDE_DOOR: 'HIDE_DOOR',
	CHANGE_DOOR_STATUS: 'CHANGE_DOOR_STATUS',
	UNLOCK_DOOR: 'UNLOCK_DOOR',
	REQUEST_ACCESS: 'REQUEST_ACCESS',
	TOGGLE_MENU: 'TOGGLE_MENU'
}

export const DATA = {
	employees: [
		{
			id: 1,
			name: 'Bill Clay',
			avatar: 'https://pbs.twimg.com/profile_images/480096003148632065/R3bKb_j8_400x400.jpeg',
			admin: false,
			doors: [ 1 ]
		},
		{
			id: 2,
			name: 'Al Powell',
			admin: true,
			doors: [ 1, 2 ]
		},
		{
			id: 3,
			name: 'Holly Genero',
			admin: false,
			doors: [ 1 ]
		},
		{
			id: 4,
			name: 'Roy Rogers',
			admin: false,
			doors: [ 1, 2 ]
		}
	]
}
