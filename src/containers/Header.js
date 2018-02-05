import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout, toggleMenu } from '../actions'

import Header from '../components/Header'

const mapStateToProps = ( state, prop ) => {
	return {
		user: state.user,

	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators({
			logout,
			toggleMenu
		}, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
