import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List'
// COMPONENTS
import { DoorItem } from './DoorItem'

export const DoorList = ({ doors, toggle, showDoor }) => {

	const available_doors = doors.map( door => {
		return (
			<DoorItem
				key={ `${door.id}-${door.name}` }
				id={ door.id }
				name={ door.name }
				access={ door.authorized }
				handleClick={ showDoor }
			/>
		)
	})

	return (
		<List className='door-list' children={ available_doors } />
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
