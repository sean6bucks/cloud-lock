import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
// COMPONENTS
import { DoorList } from './DoorList'
import { Door } from '../Door'
// STYLES
import './Doors.css'

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

	unlockDoor = () => {

	}

	requestDoorAccess = () => {

	}

	componentWillMount() {

	}

	render() {
		if ( !this.props.doors ) {
			return <CircularProgress size={150} thickness={5} />
		}

		// const filtered_doors = this.filterDoors()
		return (
			<div>
				<DoorList doors={ this.props.doors } showDoor={ this.showDoor } />
				<Door open={ this.props.show } id={ this.props.door.id } name={ this.props.door.name } access={ this.props.door.access } hideDoor={ this.hideDoor } />
			</div>
		)
	}

}

export default Doors;
