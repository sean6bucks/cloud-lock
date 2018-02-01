import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
// COMPONENTS
import { DoorItem } from './DoorItem'
import { Door } from '../Door'
// STYLES
import './Doors.css'

export class Doors extends Component {

	static propTypes = {
		doors: PropTypes.array.isRequired
	}

	componentWillMount() {

	}

	render() {
		const available_doors = this.props.doors.map( door => {
			return <DoorItem key={door.id} uid={door.id} name={door.name} access={door.authorized}/>
		})

		return (
			<section id="DoorList">
				<ul className="door-list">
					{ available_doors }
				</ul>
				<Route path={`/doors/:id`} component={ Door }/>
			</section>
		)
	}
}
