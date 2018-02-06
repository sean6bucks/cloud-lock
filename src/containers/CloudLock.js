import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Route, Redirect } from 'react-router-dom'
// CONTAINERS
import Login from './Login'
import Header from './Header'
import Menu from './Menu'
import Doors from './Doors'
import AdminDoors from './AdminDoors'
import AdminEvents from './AdminEvents'

/*
Main container for Cloud Lock application:
- Handles main state changes and actions for the app
- No UI attached to CloudLock container, just functionality
*/

class CloudLock extends Component {

	// SIMPLE TOKEN CHECK > STORED IN LOCAL TO REPRESENT SAVED SESSION
	getLocalToken = () => {
		const token = localStorage.getItem('cLock_token');
		if ( token ) this.props.action.setAuthToken( token );
	}

	componentWillMount() {
		this.getLocalToken();
		this.props.action.getUser();
	}

	render() {
		return this.props.token ? (
			<div id="App">
				<Header user={ this.props.user } logout={ this.props.action.logout } />
				<Menu />
				<Route exact path="/doors" component={ Doors } />
				<Route exact path="/settings/doors" component={ AdminDoors } />
				<Route exact path="/settings/events" component={ AdminEvents } />
				<Route path="/" render={
					({ match }) => {
						return <Redirect to={ '/doors' } />
					}
				} />
			</div>
		) : (
			<div>
				<Route path="/login" component={ Login }/>
				<Route path="/" render={
					({ match }) => {
						return <Redirect to={ '/login' } />
					}
				} />
			</div>
		)
	}
}

const mapStateToProps = ( state, prop ) => {
	return {
		token: state.token,
		user: state.user,
		doors: state.doors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CloudLock);
