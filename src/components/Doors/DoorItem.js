import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export const DoorItem = ({ uid, name, access }) => {
	return (
		<Link to={ `/doors/${uid}` }>
			<li className="door-item">
				<h3 className="door-name">
					{ name }
				</h3>
				<span className={ `door-access ${ access ? 'authorized' : 'unauthorized' }` }></span>
			</li>
		</Link>
	)
}
DoorItem.propTypes = {
	name: PropTypes.string.isRequired
}
