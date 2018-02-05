import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import { grey200, grey700 } from 'material-ui/styles/colors'

export const CancelButton = ({ disabled, handleClick }) => {
	const style = {
		position: 'absolute',
		right: 10,
		top: 10,
	};
	return (
		<FloatingActionButton mini={true} backgroundColor={ grey200 } zDepth={0} style={ style } disabled={ disabled } disabledColor={ grey200 } onClick={ handleClick }>
			<FontIcon className="material-icons" style={{ color: grey700, opacity: disabled ? .5 : 1 }}>close</FontIcon>
		</FloatingActionButton>
	)
}
