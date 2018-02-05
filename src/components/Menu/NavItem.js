import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

export const NavItem = ({ path, label, active }) => {
	return (
		<MenuItem className="nav-item">
			<span className={ `active-block ${ active ? 'active' : '' }` }></span>
			<Link style={{ paddingLeft: 15 }} to={ path }>{ label }</Link>
		</MenuItem>
	)
}
