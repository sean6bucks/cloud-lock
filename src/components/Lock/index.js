import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
// COMPONENTS
import { CancelButton } from './CancelButton'
import { LockButton } from './LockButton'
import { RequestButton } from './RequestButton'
// STYLE
import './Lock.css'

class Lock extends Component {
	static propTypes = {
		lock: PropTypes.object.isRequired,
		show: PropTypes.bool
	}

	render() {
        // TODO: MOVE INTO STATE/PROPS THROUGH CONTAINER
		const { id, name, authorized, open, status, handleUnlock, handleCancel, handleRequest } = this.props;

		const disabled = !status || status === 'unlock_failed' ? false : true;

		return (
			<Dialog className="lock"
				modal={true}
				open={ open }
				children={
					<article>
						<CancelButton
							disabled={ disabled }
							handleClick={ handleCancel } />
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
}

export default Lock;
