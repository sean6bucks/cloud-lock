import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
// APP ITEMS
import store from './store'
import CloudLock from './containers/CloudLock'
// STYLES
import './index.css'

const StoreInstance = store()

ReactDOM.render(
	<Provider store={ StoreInstance }>
		<CloudLock />,
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker()
