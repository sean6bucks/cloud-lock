import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Door from '../components/Admin/Door'

const mapStateToProps = ( state, prop ) => {
	return {
		show: state.show_door,
		door: state.door,
		employees: state.employees
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Door);
