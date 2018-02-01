import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import newStore from './store'
import App from './App.js'
// STYLES
import './index.css'

const store = newStore()

ReactDOM.render(
	<App store={ store } />,
	document.getElementById('root')
)
registerServiceWorker()
