import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Main container for Cloud Lock application:
- Handles main state changes and actions for the app
- No UI attached to CloudLock container, just functionality
*/

class CloudLock extends Component {
	render() {
		return (
			<LockApp />
		);
	}
}

export default CloudLock;
