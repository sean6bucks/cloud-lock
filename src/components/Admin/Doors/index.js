import React, { Component } from 'react'
import PropTypes from 'prop-types'
// CONTINERS
import Door from '../../../containers/AdminDoor'
// COMPONENTS
import { LoadShade } from '../../globalUI'
import { DoorList } from './DoorList'

const defaultDoor = {
	name: '',
	permissions: []
}

class Doors extends Component {

	static propTypes = {
		doors: PropTypes.array.isRequired
	}

	findDoor = (id) => {
		if ( typeof id === 'string' ) id = parseInt(id, 10);
		return this.props.doors.find( door => id === door.id )
	}

	toggleDoor = show => {
		this.props.action.toggleDoor(show);
	}

	newDoor = () => {
		this.props.action.showDoor(defaultDoor);
		this.toggleDoor(true);
	}

	showDoor = id => {
		const door = this.findDoor(id);
		this.props.action.showDoor(door);
		this.toggleDoor(true);
	}

	render() {
		return (
			this.props.fetching.doors ? (
				<LoadShade />
			) : (
				<div>
					<DoorList
						doors={ this.props.doors }
						showDoor={ this.showDoor }
						newDoor={ this.newDoor }
					/>
					<Door />
				</div>
			)
		)
	}

}

export default Doors;
