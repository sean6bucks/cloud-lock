import React from 'react'
import { ListItem } from 'material-ui/List'
import { NavLink } from 'react-router-dom'
import { lightBlueA200 } from 'material-ui/styles/colors'

export const NavItem = ({ path, label, active, handleClick }) => {
	const current_block_style = {
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		width: active ? 5 : 0,
		background: lightBlueA200
	}
	return (
		<NavLink
			to={ path }
			activeClassName="active"
			onClick={ handleClick }
		>
			<ListItem
				style={{ position: 'relative' }}
				innerDivStyle={{ paddingLeft: 25 }}>
				<span style={ current_block_style }></span>
				{ label }
			</ListItem>
		</NavLink>
	)
}
