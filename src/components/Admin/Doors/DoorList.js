import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const DoorItem = ({ id, name, handleClick }) => {
	return (
		<ListItem
			className="admin__door-list--item"
			primaryText={ name }
			onClick={ () => { handleClick(id) } }
		/>
	)
}

export const DoorList = ({ doors, show, showDoor, hideDoor }) => {
	return (
		<List id='door-list' style={{ padding: 0 }}>
			<h2 className="text-center">Doors</h2>
			<Divider />
			{ doors.map( door => <DoorItem key={ `door-${door.id}`} id={ door.id } name={ door.name } handleClick={ showDoor } /> ) }
		</List>
	)
}
DoorList.propTypes = {
	doors: PropTypes.array.isRequired
}