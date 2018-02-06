import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import { grey200, grey700 } from 'material-ui/styles/colors'

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
