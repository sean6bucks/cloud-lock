import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Employees from '../components/Admin/Employees'

const mapStateToProps = ( state, prop ) => {
	return {
		employees: state.employees,
		fetching: state.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
