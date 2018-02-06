import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Doors from '../components/Admin/Doors'

const mapStateToProps = ( state, prop ) => {
	return {
		doors: state.doors,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Doors);
