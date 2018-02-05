import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
// CONTAINERS
import Lock from '../../containers/Lock'
// COMPONENTS
import { DoorItem } from './DoorItem'

export const DoorList = ({ doors, filter, lock, show, showLock, hideLock, unlockDoor, requestAccess }) => {

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
					handleClick={ showLock }
				/>
			)
		});
	const list_header = filter === 'AUTHORIZED' ? 'Authorized Doors' : 'All Doors';

	return (
		<List id='door-list' style={{ padding: 0 }}>
			<h2 className="text-center">{ list_header }</h2>
			<Divider />
			{ available_doors }
			<Lock
				open={ show }
				id={ lock.id }
				name={ lock.name }
				status={ lock.status }
				authorized={ lock.authorized }
				handleUnlock={ unlockDoor }
				handleRequest={ requestAccess }
				handleCancel={ hideLock }
			/>
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
