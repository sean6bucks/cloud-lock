import React from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { grey200 } from 'material-ui/styles/colors'

export const EmployeeItem = ({ id, name, avatar, handleClick }) => {
	const style = {
		padding: 10,
		borderBottom: `1px solid ${ grey200 }`
	}
	return (
		<ListItem
			primaryText={ name }
			rightAvatar={ <Avatar src={avatar} /> }
			style={ style }
			onClick={ () => { handleClick(id) } }
		/>
	)
}
