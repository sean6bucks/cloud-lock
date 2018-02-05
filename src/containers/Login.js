import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../actions'

import Login from '../components/Login'

const mapStateToProps = ( state, prop ) => {
	return {
		token: state.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators({
			login
		}, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
