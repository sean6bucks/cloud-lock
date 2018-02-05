import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Lock from '../components/Lock'

const mapStateToProps = ( state, prop ) => {
	return {
		show: state.show_lock,
		lock: state.lock
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Lock);
