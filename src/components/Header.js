import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Header.css'

export const Header = ({ user }) => {
	return (
		<header id="Header">
			<img className="header_avatar avatar"
				alt={ `${user.name} header avatar`}
				src={ user.avatar } />
			<span className="header_icon icon"></span>
		</header>
	)
}
Header.propTypes = {
	user: PropTypes.object.isRequired
};
