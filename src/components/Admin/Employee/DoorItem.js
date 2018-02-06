import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox';
import { lightBlueA200, grey200 } from 'material-ui/styles/colors'

export const DoorItem = ({ door, handleClick }) => {
	const style = {
		padding: 10,
		borderBottom: `1px solid ${ grey200 }`
	}
	return (
		<ListItem
			primaryText={ door.name }
			leftCheckbox={
				<Checkbox
					checked={ door.selected }
					iconStyle={{ color: lightBlueA200 }}
					onClick={ handleClick } />
			}
			style={ style }
		/>
	)
}
