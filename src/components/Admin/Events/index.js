import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
// COMPONENTS
import { EventsList } from './EventsList'

class Events extends Component {

	render() {
		return this.props.fetching.events ? (
			<CircularProgress size={150} thickness={5} />
		) : (
			<EventsList events={ this.props.events } filter={ this.props.events_filter }/>
		)
	}

}

export default Events;
