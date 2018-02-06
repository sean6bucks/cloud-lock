import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
// CONTINERS
import AdminDoor from '../../../containers/AdminDoor'
// COMPONENTS
import { DoorList } from './DoorList'

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

	showDoor = id => {
		const door = this.findDoor(id);
		this.props.action.showDoor(door);
		this.toggleDoor(true);
	}

	hideDoor = () => {
		this.toggleDoor(false);
		this.props.action.resetDoor();
	}

	render() {
		return this.props.doors ?
			(
				<div>
					<DoorList
						doors={ this.props.doors }
						showDoor={ this.showDoor } />
					<AdminDoor />
				</div>
			) : (
				<CircularProgress size={150} thickness={5} />
			)
	}

}

export default Doors;
