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

	unlockDoor = () => {
		this.props.action.unlockDoor( this.props.lock.id );
	}

	requestDoorAccess = id => {
		this.props.action.requestAccess( this.props.lock.id );
	}

	hideLock = () => {
		this.props.action.toggleLock(false);
		this.props.action.resetLock();
	}

	render() {
		const disabled = !this.props.lock.status || this.props.lock.status === 'unlock_failed' ? false : true;

		return (
			<Dialog className="lock"
				modal={true}
				open={ this.props.show }
				children={
					<article>
						<CancelButton
							disabled={ disabled }
							handleClick={ this.hideLock } />
						<LockButton
							key='door-unlock'
							id={ this.props.lock.id }
							authorized={ this.props.lock.authorized }
							status={ this.props.lock.status }
							handleClick={ this.unlockDoor } />
						<h2 key='door-name' className="text-center">{ this.props.lock.name }</h2>
					</article>
				}
				actions={ !this.props.lock.authorized ? <RequestButton id={ this.props.lock.id } status={ this.props.lock.status } handleClick={ this.requestDoorAccess } /> : null }
				actionsContainerStyle={{ textAlign: 'center' }}
			/>
		)
	}
}

export default Lock;
