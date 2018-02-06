import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { grey200, grey700, lightBlueA200 } from 'material-ui/styles/colors'

export const CloseButton = ({ disabled, handleClick }) => {
	const style = {
		position: 'absolute',
		right: 10,
		top: 10,
		zIndex: 9
	};
	return (
		<FloatingActionButton mini={true} backgroundColor={ grey200 } zDepth={1} style={ style } disabled={ disabled } disabledColor={ grey200 } onClick={ handleClick }>
			<FontIcon className="material-icons" style={{ color: grey700, opacity: disabled ? .5 : 1 }}>close</FontIcon>
		</FloatingActionButton>
	)
}

export const ListHeader = ({ text }) => {
	const style = { padding: 10, textAlign: 'center' }
	return <h2 style={ style }>{ text }</h2>
}

export const SaveButton = ({ id, status, handleClick }) => {
	return status === 'updating' ? (
		<CircularProgress key="requesting-icon" color={ lightBlueA200 } size={32}/>
	) : (
		<RaisedButton
			key='save-button'
			label={ id ? 'Update' : 'Save' }
			backgroundColor={ lightBlueA200 }
			labelColor='#ffffff'
			disabled={ status !== 'dirty' }
			fullWidth={true}
			onClick={ handleClick }
		/>
	)
}

export const CreateNew = ({ label='Create New', handleClick }) => {
	const style = {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		padding: 15
	}
	return (
		<div style={ style }>
			<RaisedButton
				key='create-new-button'
				label={ label }
				backgroundColor={ lightBlueA200 }
				labelColor='#ffffff'
				fullWidth={true}
				onClick={ handleClick }
			/>
		</div>
	)
}
