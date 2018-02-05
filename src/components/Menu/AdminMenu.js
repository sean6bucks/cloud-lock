import React from 'react'
import Divider from 'material-ui/Divider'

import { NavItem } from './NavItem'

export const AdminMenu = ({ pathname }) => {

	const active = path => {
		return path === pathname;
	}

	const paths = {
		doors: '/settings/doors',
		employees: '/settings/employees',
		events: '/settings/events'
	}

	return (
		<section id="user-menu" className="menu-section">
			<h2>Admin Settings</h2>
			<NavItem path={ paths.doors } label={ 'Doors' } active={ active(paths.doors) } />
			<NavItem path={ paths.employees } label={ 'Employees' } active={ active(paths.employees) } />
			<NavItem path={ paths.events } label={ 'Event History' } active={ active(paths.events) } />
			<Divider />
		</section>
	)
}
