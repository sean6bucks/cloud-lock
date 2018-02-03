import React from 'react'
import Paper from 'material-ui/Paper'
import {
	BottomNavigation,
	BottomNavigationItem
} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'

import './Footer.css'

// TODO HANDLE INDEX CHANGE IN STATE

const keyIcon = <FontIcon className="material-icons">vpn_key</FontIcon>;
const lockIcon = <FontIcon className="material-icons">lock</FontIcon>;

export const Footer = ({ user }) => {

	return (
		<Paper zDepth={1} id="Footer">
			<BottomNavigation selectedIndex={1}>
				<BottomNavigationItem
					icon={ keyIcon }
					onClick={() => this.select(0)}
				/>
				<BottomNavigationItem
					icon={ lockIcon }
					onClick={() => this.select(1)}
				/>
			</BottomNavigation>
		</Paper>
	)
}
