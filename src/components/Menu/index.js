import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
// COMPONENTS
import { CloseButton } from './CloseButton'
import { UserMenu } from './UserMenu'
import { AdminMenu } from './AdminMenu'
// STYLES
import './Menu.css'

class Menu extends Component {

	static propTypes = {
		open_menu: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Drawer open={ this.props.open_menu }>
				<CloseButton handleClick={ this.props.action.toggleMenu } />
				<UserMenu user={ this.props.user } pathname={ this.props.location.pathname }/>
				{ this.props.user.admin ? (
					<AdminMenu pathname={ this.props.location.pathname }/>
				) : null }
			</Drawer>
		)
	}
}

export default Menu;
