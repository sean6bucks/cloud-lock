import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import { deepOrange500 } from 'material-ui/styles/colors'

export const CloseButton = ({ handleClick }) => {
	const style = {
		position: 'absolute',
		right: 10,
		top: 10,
		zIndex: 10
	};
	return (
		<FloatingActionButton
			mini={true}
			backgroundColor={ deepOrange500 }
			zDepth={1}
			style={ style }
			onClick={ handleClick }>
			<FontIcon className="material-icons">close</FontIcon>
		</FloatingActionButton>
	)
}
