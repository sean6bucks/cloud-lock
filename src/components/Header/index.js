import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import { deepOrange500 } from 'material-ui/styles/colors'
// COMPONENT
import { Logout } from './Logout'
// STYLES
import './Header.css'

class Header extends Component {

	static propTypes = {
		user: PropTypes.object.isRequired
	}

	render() {
		const style = {
			position: 'fixed',
			top: 0,
			zIndex: 10,
			backgroundColor: deepOrange500
		};

		return (
			<AppBar
				style={ style }
				iconElementRight={ <Logout handleClick={ this.props.action.logout }/> }
				onLeftIconButtonClick={ this.props.action.toggleMenu }
			/>
		)
	}
}

export default Header;
