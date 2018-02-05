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

	findLock = (id) => {
		if ( typeof id === 'string' ) id = parseInt(id, 10);
		return this.props.doors.find( door => id === door.id )
	}

	filterDoors = filter => {
		this.props.action.changeListFilter( filter )
	}

	toggleLock = show => {
		this.props.action.toggleLock(show);
	}

	showLock = id => {
		const lock = this.findLock(id);
		this.props.action.showLock(lock);
		this.toggleLock(true);
	}

	hideLock = () => {
		this.toggleLock(false);
		this.props.action.resetLock();
	}

	unlockDoor = id => {
		this.props.action.unlockDoor(id);
	}

	requestDoorAccess = id => {
		this.props.action.requestAccess(id);
	}

	render() {
		if ( !this.props.doors ) {
			return <CircularProgress size={150} thickness={5} />
		}

		// const filtered_doors = this.filterDoors()
		return (
			<div>
				<DoorList doors={ this.props.doors } filter={ this.props.filter } showLock={ this.showLock } hideLock={ this.hideLock } unlockDoor={ this.unlockDoor } requestAccess={ this.requestDoorAccess } />
				<DoorFilters filter={ this.props.filter } handleClick={ this.filterDoors } />
			</div>
		)
	}

}

export default Doors;
