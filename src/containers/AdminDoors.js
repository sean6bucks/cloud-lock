import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	toggleDoor,
	showDoor,
} from '../actions'

import Doors from '../components/Admin/Doors'

const mapStateToProps = ( state, prop ) => {
	return {
		doors: state.doors,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( {
			toggleDoor,
			showDoor
		}, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Doors);
