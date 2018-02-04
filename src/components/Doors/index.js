import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
// COMPONENTS
import { DoorList } from './DoorList'
import { DoorFilters } from './DoorFilters'
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

	filterDoors = filter => {
		this.props.action.changeListFilter( filter )
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

	unlockDoor = id => {
		this.props.action.unlockDoor(id);
	}

	requestDoorAccess = id => {
		this.props.action.requestAccess(id);
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
				<DoorList doors={ this.props.doors } filter={ this.props.filter } show={ this.props.show } door={ this.props.door } showDoor={ this.showDoor } hideDoor={ this.hideDoor } unlockDoor={ this.unlockDoor } requestAccess={ this.requestDoorAccess } />
				<DoorFilters filter={ this.props.filter } handleClick={ this.filterDoors } />
			</div>
		)
	}

}

export default Doors;
