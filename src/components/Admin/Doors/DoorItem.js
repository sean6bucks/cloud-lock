import React from 'react'
import { ListItem } from 'material-ui/List'
import { grey200 } from 'material-ui/styles/colors'

export const DoorItem = ({ id, name, handleClick }) => {
	const style = {
		padding: 10,
		borderBottom: `1px solid ${ grey200 }`
	}
	return (
		<ListItem
			primaryText={ name }
			style={ style }
			onClick={ () => { handleClick(id) } }
		/>
	)
}
