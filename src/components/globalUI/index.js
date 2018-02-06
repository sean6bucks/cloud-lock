import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { grey200, grey700, lightBlueA200, deepOrange500 } from 'material-ui/styles/colors'

export const LoadShade = () => {
	const shade_style = {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		width: '100%',
		backgroundColor: grey200,
		zIndex: 15
	}
	const spinner_style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate( -50%, -50% )'
	}
	return(
		<div style={ shade_style }>
			<CircularProgress
				color={ deepOrange500 }
				size={150}
				thickness={5}
				style={ spinner_style }
			/>
		</div>
	)
}

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
	const style = { padding: 15, textAlign: 'center' }
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
