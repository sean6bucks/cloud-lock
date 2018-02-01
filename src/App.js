import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// APP ITEMS
import CloudLock from './containers/CloudLock'
// STYLES
import './App.css'

const App = ({ store }) => {
	return (
		<Provider store={ store }>
			<Router>
				<Route path="/" component={ CloudLock } />
			</Router>
		</Provider>
	)
}
App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App;
