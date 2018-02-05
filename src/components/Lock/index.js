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
		const { handleUnlock, handleCancel, handleRequest } = this.props;

		const disabled = !this.props.lock.status || this.props.lock.status === 'unlock_failed' ? false : true;

		return (
			<Dialog className="lock"
				modal={true}
				open={ this.props.show }
				children={
					<article>
						<CancelButton
							disabled={ disabled }
							handleClick={ handleCancel } />
						<LockButton
							key='door-unlock'
							id={ this.props.lock.id }
							authorized={ this.props.lock.authorized }
							status={ this.props.lock.status }
							handleClick={ handleUnlock } />
						<h2 key='door-name' className="text-center">{ this.props.lock.name }</h2>
					</article>
				}
				actions={ !this.props.lock.authorized ? <RequestButton id={this.props.lock.id} status={ this.props.lock.status } handleClick={ handleRequest } /> : null }
				actionsContainerStyle={{ textAlign: 'center' }}
			/>
		)
	}
}

export default Lock;
