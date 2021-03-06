import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
// COMPONENTS
import { DoorItem } from './DoorItem'
import { ListHeader } from '../globalUI'

export const DoorList = ({ doors, filter, showLock }) => {

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
			<ListHeader text={ list_header } />
			<Divider />
			{ available_doors }
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}
