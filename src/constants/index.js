export const TYPES = {
	LOGIN_USER: 'LOGIN_USER',
	GET_USER_INFO: 'GET_USER_INFO',
	GET_DOOR_LIST: 'GET_DOOR_LIST'
}

export const DATA = {
	doors: [
		{
			id: 1,
			name: 'Front Door',
			locked: true
		},
		{
			id: 2,
			name: 'Storage Room',
			locked: true
		}
	],
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
	],
	user: {
		id: 1,
		name: 'Bill Clay',
		avatar: 'https://pbs.twimg.com/profile_images/480096003148632065/R3bKb_j8_400x400.jpeg',
		admin: false,
		doors: [ 1 ]
	}
}
