import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Header from '../components/Header'

const mapStateToProps = ( state, prop ) => {
	return {
		user: state.user,

	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators( actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
