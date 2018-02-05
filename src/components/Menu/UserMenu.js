import React from 'react'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

import { NavItem } from './NavItem'

export const UserMenu = ({ user, pathname }) => {

	const active = path => {
		return path === pathname;
	}

	const paths = {
		doors: '/doors',
		events: '/events'
	}

	return (
		<section id="user-menu" className="menu-section">
			<h2>
				<Avatar className="user-avatar" src={ user.avatar } style={{
					verticalAlign: 'text-bottom',
					marginRight: 10
				}} />
				{ user.name }
			</h2>
			<NavItem path={ paths.doors } label={ 'Available Doors' } active={ active(paths.doors) } />
			<NavItem path={ paths.events } label={ 'User History' } active={ active(paths.events) } />
			<Divider />
		</section>
	)
}
