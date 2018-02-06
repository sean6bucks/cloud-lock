import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { ListItem } from 'material-ui/List'
// COMPONENTS
import { CloseButton } from './CloseButton'
import { UserMenu } from './UserMenu'
import { AdminMenu } from './AdminMenu'

class Menu extends Component {

	static propTypes = {
		open_menu: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Drawer docked={false} open={ this.props.open_menu }>
				<CloseButton handleClick={ this.props.action.toggleMenu } />
				<ListItem
					disabled={true}
					leftAvatar={ <Avatar src={ this.props.user.avatar } /> }
					primaryText={ <h2>{ this.props.user.name }</h2> }
					innerDivStyle={{ paddingLeft: 60 }}
				></ListItem>
				<Divider />
				<UserMenu
					pathname={ this.props.location.pathname }
					toggle={ this.props.action.toggleMenu }/>
				{
					this.props.user.admin ? (
						<AdminMenu pathname={ this.props.location.pathname } toggle={ this.props.action.toggleMenu }/>
					) : null
				}
			</Drawer>
		)
	}
}

export default Menu;
