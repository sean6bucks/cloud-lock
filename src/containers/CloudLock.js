import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components/Header'
import Doors from './Doors'

/*
Main container for Cloud Lock application:
- Handles main state changes and actions for the app
- No UI attached to CloudLock container, just functionality
*/

class CloudLock extends Component {

	componentWillMount() {
		this.props.action.getUser();
	}

	render() {
		return (
			<div>
				<Header user={ this.props.user } />
				{/* TODO: REPLACE WITH LOGIN HANDLING */}
				<Route exact path="/" render={ () => <Redirect to={'/doors'}/> }/>
				<Route exact path="/doors" component={ Doors } />
			</div>
		)
	}
}

const mapStateToProps = ( state, prop ) => {
	return {
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
