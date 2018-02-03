import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// APP ITEMS
import CloudLock from './containers/CloudLock'
// STYLES
import './App.css'

const App = ({ store }) => {
	return (
		<Provider store={ store }>
			<BrowserRouter>
				<Switch>
					<MuiThemeProvider>
						<Route path="/" component={ CloudLock } />
					</MuiThemeProvider>
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}
App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App;
