import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Door.css'

export class Door extends Component {

	static propTypes = {
		uid: PropTypes.number,
		name: PropTypes.string,
	}

	render() {
		return (
			<div className="door">
				<h4>{ this.props.name }</h4>
			</div>
		)
	}
}
