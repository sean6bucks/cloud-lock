import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import { lightGreenA400, grey200 } from 'material-ui/styles/colors'

export const DoorItem = ({ id, name, authorized, handleClick }) => {
	const icon = (
		<FontIcon
			className="material-icons"
			color={ authorized ? lightGreenA400 : grey200 } >
			{ authorized ? 'vpn_key' : 'block' }
		</FontIcon>
	)
	const style = {
		padding: 10,
		borderBottom: `1px solid ${ grey200 }`
	}
	return (
		<ListItem
			primaryText={ name }
			rightIcon={ icon }
			style={ style }
			onClick={ () => { handleClick(id) } }
		/>
	)
}
DoorItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	authorized: PropTypes.bool.isRequired
}
