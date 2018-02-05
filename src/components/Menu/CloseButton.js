import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import { lightBlueA200 } from 'material-ui/styles/colors'

export const CloseButton = ({ handleClick }) => {
	const style = {
		position: 'absolute',
		right: 10,
		bottom: 10,
	};
	return (
		<FloatingActionButton mini={true} backgroundColor={ lightBlueA200 } zDepth={0} style={ style } onClick={ handleClick }>
			<FontIcon className="material-icons">close</FontIcon>
		</FloatingActionButton>
	)
}
