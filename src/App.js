import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// APP ITEMS
import CloudLock from './containers/CloudLock'
// STYLES
import './App.css'

const App = ({ store }) => {
	return (
		<Provider store={ store }>
			<BrowserRouter>
				<MuiThemeProvider>
					<Switch>
						<Route path="/" component={ CloudLock } />
					</Switch>
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>
	)
}
App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App;
