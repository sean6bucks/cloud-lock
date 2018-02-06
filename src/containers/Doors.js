import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Doors from '../components/Doors'

const mapStateToProps = ( state, prop ) => {
	return {
		doors: state.user.doors,
		filter: state.user.filter,
		show: state.show_lock,
		lock: state.lock
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Doors);
