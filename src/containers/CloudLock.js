import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { baseUrl } from '../config/baseUrl'
// CONTAINERS
import Login from './Login'
import Header from './Header'
import Menu from './Menu'
import Doors from './Doors'
import AdminDoors from './AdminDoors'
import AdminEmployees from './AdminEmployees'
import AdminEvents from './AdminEvents'

// LOAD SHADE
import { LoadShade } from '../components/globalUI'

/*
Main container for Cloud Lock application:
- Handles initial load behavors and data fetch for the app
- No UI attached ( except load shade ) to CloudLock container, just functionality
*/

class CloudLock extends Component {

	// SIMPLE TOKEN CHECK > STORED IN LOCAL TO REPRESENT SAVED SESSION
	checkForToken = () => {
		const token = localStorage.getItem('cLock_token');
		if ( token ) this.props.action.setAuthToken( token );
		else this.props.action.fetchingComplete('token');
	}

	componentWillMount() {
		this.checkForToken();
	}

	render() {
        // LOAD SHDE TO PREVENT REROUTE BEFORE TOKEN CHECKED
		return (
			this.props.fetching.token ? (
				<LoadShade />
			) : !this.props.token ? (
				<div>
					<Switch>
						<Route path="/login" component={ Login }/>
						<Route path="/" render={ () => <Redirect to="/login" /> } />
					</Switch>
				</div>
			) : (
				<div id="App">
					<Header user={ this.props.user } logout={ this.props.action.logout } />
					<Menu />
					{
						this.props.fetching.user ? (
							<LoadShade />
						) : (
							<Switch>
								<Route path="/settings/doors" component={ AdminDoors } />
								<Route path="/settings/employees" component={ AdminEmployees } />
								<Route path="/settings/events" component={ AdminEvents } />
								<Route path="/doors" component={ Doors } />
								<Route path="/" render={ () => <Redirect to={ '/doors' } /> } />
							</Switch>
						)
					}
				</div>
			)
		)
	}
}

const mapStateToProps = ( state, prop ) => {
	return {
		token: state.token,
		user: state.user,
		doors: state.doors,
		fetching: state.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(CloudLock) );
