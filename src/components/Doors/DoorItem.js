import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import { lightGreenA400, red200 } from 'material-ui/styles/colors'

export const DoorItem = ({ id, name, authorized, handleClick }) => {
    // TODO: MOVE INTO SINGLE CONST WITH CONDITIONALS
    // TODO: UPDATE ICON TO BLOCK
	const authorizedAvatar = <Avatar backgroundColor={ lightGreenA400 } icon={ <FontIcon className="material-icons" color={ '#ffffff' } >vpn_key</FontIcon> } />
	const unauthorizedAvatar = <Avatar backgroundColor={ red200 } icon={ <FontIcon className="material-icons" color={ '#ffffff' } >block</FontIcon> } />

	return (
		<ListItem
			className={ `door-list__item ${ authorized ? 'authorized' : 'unauthorized' }` }
			primaryText={ name }
			rightAvatar={ authorized ? authorizedAvatar : unauthorizedAvatar }
			onClick={ () => { handleClick(id) } }
		/>
	)
}
DoorItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	authorized: PropTypes.bool.isRequired
}
