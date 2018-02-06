import React from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

import { NavItem } from './NavItem'

export const AdminMenu = ({ pathname, toggle }) => {

	const active = path => {
		return path === pathname;
	}

	const paths = {
		doors: '/settings/doors',
		employees: '/settings/employees',
		events: '/settings/events'
	}

	return (
		<List id="admin-menu">
			<Subheader>Admin Settings</Subheader>
			<NavItem path={ paths.doors } label={ 'Doors' } active={ active(paths.doors) } handleClick={ toggle } />
			<NavItem path={ paths.employees } label={ 'Employees' } active={ active(paths.employees) } handleClick={ toggle } />
			<NavItem path={ paths.events } label={ 'Event History' } active={ active(paths.events) } handleClick={ toggle } />
			<Divider />
		</List>
	)
}
