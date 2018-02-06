import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Events from '../components/Admin/Events'

const mapStateToProps = ( state, prop ) => {
	return {
		events: state.events,
		fetching: state.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
