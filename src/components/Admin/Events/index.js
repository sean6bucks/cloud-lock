import React, { Component } from 'react'
// COMPONENTS
import { LoadShade } from '../../globalUI'
import { EventsList } from './EventsList'

class Events extends Component {

	render() {
		return (
			this.props.fetching.events ? (
				<LoadShade />
			) : (
				<EventsList events={ this.props.events } filter={ this.props.events_filter }/>
			)
		)
	}

}

export default Events;
