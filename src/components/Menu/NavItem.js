import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ path, label, active, handleClick }) => {
	return (
		<NavLink
			to={ path }
			activeClassName="active"
			onClick={ handleClick }
		>
			<MenuItem className="nav-item" innerDivStyle={{ paddingLeft: 25 }}>
				<span className="active-block"></span>
				{ label }
			</MenuItem>
		</NavLink>
	)
}
