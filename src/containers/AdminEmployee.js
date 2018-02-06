import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Employee from '../components/Admin/Employee'

const mapStateToProps = ( state, prop ) => {
	return {
		show: state.show_employee,
		employee: state.employee,
		doors: state.doors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
