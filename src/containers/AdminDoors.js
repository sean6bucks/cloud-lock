import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import AdminDoors from '../components/AdminDoors'

const mapStateToProps = ( state, prop ) => {
	return {
		doors: state.user.doors,
		show: state.show_door,
		door: state.door
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDoors);
