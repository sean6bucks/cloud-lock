import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { grey700, grey200 } from 'material-ui/styles/colors'
// COMPONENTS
import { LockButton } from './LockButton'
import { RequestButton } from './RequestButton'
// STYLE
import './Door.css'

export const Door = ({ id, name, authorized, open, status, handleUnlock, handleCancel, handleRequest }) => {
	const disabled = !status || status === 'unlock_failed' ? false : true;
	const cancel_style = {
		position: 'absolute',
		right: 10,
		top: 10,
	};

	return (
		<Dialog className="door"
			modal={true}
			open={ open }
			children={
				<article>
					<FloatingActionButton mini={true} backgroundColor={ grey200 } zDepth={0} style={ cancel_style } disabled={ disabled } disabledColor={ grey200 } onClick={ handleCancel }>
						<FontIcon className="material-icons" style={{ color: grey700, opacity: disabled ? .5 : 1 }}>close</FontIcon>
					</FloatingActionButton>
					<LockButton
						key='door-unlock'
						id={ id }
						authorized={ authorized }
						status={ status }
						handleClick={ handleUnlock } />
					<h2 key='door-name' className="text-center">{ name }</h2>
				</article>
			}
			actions={ !authorized ? <RequestButton id={id} status={ status } handleClick={ handleRequest } /> : null }
			actionsContainerStyle={{ textAlign: 'center' }}
		/>
	)
}
Door.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	authorized: PropTypes.bool
}
