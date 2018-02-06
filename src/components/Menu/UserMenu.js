import React from 'react'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

import { NavItem } from './NavItem'

export const UserMenu = ({ user, pathname, toggle }) => {

	const active = path => {
		return path === pathname;
	}

	const paths = {
		doors: '/doors',
		events: '/events'
	}

	return (
		<List>
			<Subheader>User</Subheader>
			<NavItem
				path={ paths.doors }
				label={ 'Door Locks' }
				active={ active(paths.doors) }
				handleClick={ toggle } />
			<Divider />
		</List>
	)
}
