import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
// COMPONENTS
import { DoorItem } from './DoorItem'
import { ListHeader, CreateNew } from '../../globalUI'

export const DoorList = ({ doors, showDoor, newDoor }) => {
	return (
		<List id='door-list' style={{ padding: 0 }}>
			<ListHeader text="Doors" />
			<Divider />
			{ doors.map( door => (
				<DoorItem
					key={ `door-${door.id}`}
					id={ door.id }
					name={ door.name }
					handleClick={ showDoor } />
			)) }
			<CreateNew handleClick={ newDoor }/>
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
