import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
// CONTAINERS
import Lock from '../../containers/Lock'
// COMPONENTS
import { DoorList } from './DoorList'
import { DoorFilters } from './DoorFilters'

class Doors extends Component {

	static propTypes = {
		doors: PropTypes.array
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

	render() {
		if ( !this.props.doors ) {
			return <CircularProgress size={150} thickness={5} />
		}

		return (
			<div>
				<DoorList
					doors={ this.props.doors }
					filter={ this.props.filter }
					showLock={ this.showLock } />
				<DoorFilters
					filter={ this.props.filter }
					handleClick={ this.filterDoors } />
				<Lock />
			</div>
		)
	}

}

export default Doors;
