import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'

import './Header.css'

export const Header = ({ user }) => {
	const style = {
		height: 60,
		width: 60,
		position: 'fixed',
		top: 10,
		right: 10,
		zIndex: 10
	};
	return (
		<Paper style={ style } circle={true} zDepth={3}>
			<Avatar src={ user.avatar } size={60} />
		</Paper>
	)
}
Header.propTypes = {
	user: PropTypes.object.isRequired
};
