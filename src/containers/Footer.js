import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Footer from '../components/Footer'

const mapStateToProps = ( state, prop ) => {
	return {
		filter: state.user.filter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
