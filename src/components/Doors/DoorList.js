import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
// COMPONENTS
import { DoorItem } from './DoorItem'

export const DoorList = ({ doors, filter, showDoor }) => {

	const available_doors = doors
		.filter( door => {
			return filter === 'ACCESS' ? door.authorized : true;
		})
		.map( door => {
			return (
				<DoorItem
					key={ `${door.id}-${door.name}` }
					id={ door.id }
					name={ door.name }
					access={ door.authorized }
					handleClick={ showDoor }
				/>
			)
		});
	const list_header = filter === 'ACCESS' ? 'Authorized Doors' : 'All Doors';
	return (
		<List className='door-list'>
			<h2>{ list_header }</h2>
			{ available_doors }
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
