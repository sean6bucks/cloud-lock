import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleMenu } from '../actions'

import Menu from '../components/Menu'

const mapStateToProps = ( state, prop ) => {
	return {
		open_menu: state.open_menu,
		user: state.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		action: bindActionCreators({
			toggleMenu
		}, dispatch )
	}
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Menu) );
