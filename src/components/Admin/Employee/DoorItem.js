import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox';
import { lightBlueA200 } from 'material-ui/styles/colors'

export const DoorItem = ({ door, handleClick }) => {
	return (
		<ListItem
			primaryText={ door.name }
			leftCheckbox={
				<Checkbox
					checked={ door.selected }
					iconStyle={{ color: lightBlueA200 }}
					onClick={ handleClick } />
			}
		/>
	)
}
