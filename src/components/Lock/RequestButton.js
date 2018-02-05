import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { lightBlueA200 } from 'material-ui/styles/colors'

export const RequestButton = ({ id, status, handleClick }) => {
	const disabled = !status || status === 'request_failed' ? false : true;

	return status === 'requesting' ? (
		<CircularProgress key="requesting-icon" color={ lightBlueA200 } size={32}/>
	) : status === 'requested' ? (
		<p className="button-text text-center">Request Sent!</p>
	) : (
		<RaisedButton key='request-unlock-button'
			label='Request Access'
			backgroundColor={ lightBlueA200 }
			labelColor='#ffffff'
			disabled={ disabled }
			fullWidth={true}
			onClick={ () => { handleClick(id); }} />
	)
}
