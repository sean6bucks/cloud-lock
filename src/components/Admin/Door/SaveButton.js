import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { lightBlueA200 } from 'material-ui/styles/colors'

export const SaveButton = ({ status, handleClick }) => {
	return status === 'updating' ? (
		<CircularProgress key="requesting-icon" color={ lightBlueA200 } size={32}/>
	) : (
		<RaisedButton key='request-unlock-button'
			label="Update"
			type="submit"
			backgroundColor={ lightBlueA200 }
			labelColor='#ffffff'
			disabled={ status !== 'dirty' }
			fullWidth={true}
			onClick={ handleClick }
		/>
	)
}
