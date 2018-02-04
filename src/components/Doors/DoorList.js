import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
// COMPONENTS
import { DoorItem } from './DoorItem'
import { Door } from '../Door'

export const DoorList = ({ doors, filter, door, show, showDoor, hideDoor, unlockDoor, requestAccess }) => {

	const available_doors = doors
		.filter( door => {
			return filter === 'AUTHORIZED' ? door.authorized : true;
		})
		.map( door => {
			return (
				<DoorItem
					key={ `${door.id}-${door.name}` }
					id={ door.id }
					name={ door.name }
					authorized={ door.authorized }
					handleClick={ showDoor }
				/>
			)
		});
	const list_header = filter === 'AUTHORIZED' ? 'Authorized Doors' : 'All Doors';

	return (
		<List id='door-list'>
			<h2 className="text-center">{ list_header }</h2>
			{ available_doors }
			<Door
				open={ show }
				id={ door.id }
				name={ door.name }
				status={ door.status }
				authorized={ door.authorized }
				handleUnlock={ unlockDoor }
				handleRequest={ requestAccess }
				handleCancel={ hideDoor }
			/>
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
