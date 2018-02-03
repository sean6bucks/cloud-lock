import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
	BottomNavigation,
	BottomNavigationItem
} from 'material-ui/BottomNavigation'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faKey, faListUl } from '@fortawesome/fontawesome-free-solid'

import './Footer.css'

class Footer extends Component {

	select = filter => {
		this.props.action.changeListFilter( filter )
	}

	render() {

		const fontIcon = (icon, rotate=0) => <FontAwesomeIcon icon={icon} transform={{ rotate: rotate }} />;
		const index = this.props.filter === 'ACCESS' ? 0 : 1;

		return (
			<Paper zDepth={1} id="Footer">
				<BottomNavigation selectedIndex={ index }>
					<BottomNavigationItem
						icon={ fontIcon(faKey) }
						onClick={() => this.select('ACCESS')}
					/>
					<BottomNavigationItem
						icon={ fontIcon(faListUl, 180) }
						onClick={() => this.select('ALL')}
					/>
				</BottomNavigation>
			</Paper>
		)
	}
}

export default Footer;
