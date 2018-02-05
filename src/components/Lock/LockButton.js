import React from 'react'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import { grey700, grey200, lightBlueA200, lightGreenA400, red200 } from 'material-ui/styles/colors'

const UnlockStatus = ({ status }) => {
	const sideLength = 200,
		stroke_width = 5,
		cx = sideLength / 2,
		cy = cx,
		r = cx - ( stroke_width / 2 ),
		circ = r * 2 * Math.PI,
		dash_size = ( status === 'unlocking' ? 0.4 : 1 ) * circ,
		stroke = status === 'unlocking' ? lightBlueA200 :
				status === 'unlocked' ? lightGreenA400 :
				status === 'unlock_failed' ? red200 : grey200;

	return (
		<svg className="unlock-spinner" height={ 200 } width={ 200 }>
			<circle className="unlock-spinner__background" cx={ cx } cy={ cy } r={ r } stroke={ grey200 } fill="transparent" strokeWidth={ stroke_width }/>
			<circle className="unlock-spinner__foreground" cx={ cx } cy={ cy } r={ r } stroke={ stroke } fill="transparent" strokeWidth={ stroke_width } strokeDasharray={ [ dash_size, circ - dash_size ] } strokeLinecap="round"/>
		</svg>
	)
}

const LockIcon = ({ authorized, status }) => {

	const UnlockComplete = () => (
		<svg className="unlock-icon__complete" height={200} width={200}>
			<polyline className="unlock-icon__complete--path" fill="none" stroke={ lightGreenA400 } strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
		</svg>
	);

	const icon_style = {
		fontSize: 100,
		color: status === 'unlocking' ? lightBlueA200 :
			status === 'unlocked' ? lightGreenA400 :
			status === 'unlock_failed' ? red200 : grey200
	};

	return status === 'unlocked' ? <UnlockComplete /> : (
		<FontIcon
			key="authorized-icon"
			className="material-icons unlock-icon__locked"
			style={ icon_style } >
			{ status === 'unlocked' ? 'check' :
				authorized ? 'lock_outline' : 'block' }
		</FontIcon>
	)
}

const ActionText = ({ authorized, status }) => {
	const action_text = !authorized ? 'You do not have access.' :
		status === 'unlocking' ? 'unlocking...' :
		status === 'unlocked' ? 'Door is Unlocked!' :
		status === 'unlock_failed' ? 'Error. Tap to try again.' :
		'Tap to unlock';
	return <p className='door-authorized__text' style={{ color: status === 'unlock_failed' ? red200 : grey700 }}>{ action_text }</p>
}

export const LockButton = ({ id, authorized, status, handleClick }) => {
	return (
		<Paper key='door-authorized-icon'
			className={ `door-authorized ${ !authorized ? 'unauthorized' : '' } ${ status }` }
			zDepth={ authorized ? 3 : 0}
			circle={true}
			onClick={ () => {
				if ( !authorized ) return false;
				handleClick(id);
			}}
		>
			{ authorized ? <UnlockStatus status={ status } /> : null }
			<LockIcon authorized={ authorized } status={ status } />
			<ActionText authorized={ authorized } status={ status } />
		</Paper>

	)
}
