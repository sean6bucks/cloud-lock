import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import { grey700, grey200 } from 'material-ui/styles/colors'

import './Door.css'

export const Door = ({ id, name, access, open, hideDoor }) => {

	const icon_style = {
		margin: 48,
		fontSize: 100
	};

	const authorizedIcon = <FontIcon className="material-icons door__access-icon" style={ icon_style } color={ grey700 } >lock</FontIcon>;
	const unauthorizedIcon = <FontIcon className="material-icons door__access-icon" style={ icon_style } color={ grey200 } >lock_outline</FontIcon>;

	const paper_style = {
		margin: `50px auto`,
		height: 200,
		width: 200,
		border: `2px solid ${ grey200 }`
	};

	return (
		<Dialog className="door"
			modal={true}
			open={ open }
			children={[
				<Paper key='door-authorized-icon' style={ paper_style } zDepth={3} circle={true} children={ access ? authorizedIcon : unauthorizedIcon } />,
				<h4 key='door-name'>{ name }</h4>
			]}
			actions={ <RaisedButton label="Cancel" fullWidth={true} onClick={ hideDoor }/>}
		/>
	)
}
Door.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	access: PropTypes.bool
}
