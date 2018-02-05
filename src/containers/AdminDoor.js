import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	toggleDoor,
	resetDoor,
	updateDoorEmployees,
	changeDoorStatus,
	updateDoor
} from '../actions'

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
		action: bindActionCreators( {
			toggleDoor,
			resetDoor,
			updateDoorEmployees,
			changeDoorStatus,
			updateDoor
		}, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Door);
