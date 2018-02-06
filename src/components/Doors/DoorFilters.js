import React from 'react'
import Paper from 'material-ui/Paper'
import {
	BottomNavigation,
	BottomNavigationItem
} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'

export const DoorFilters = ({ filter, handleClick }) => {

	const style = {
		position: 'fixed',
		width: '100%',
		bottom: 0
	}
	const fontIcon = (icon, rotate=0) => (
		<FontIcon
			className="material-icons"
			style={{ transform: `rotate(${rotate}deg)` }}>
			{ icon }
		</FontIcon>
	);
	const index = filter === 'AUTHORIZED' ? 0 : 1;

	return (
		<Paper id="door-filters" zDepth={1} style={ style }>
			<BottomNavigation selectedIndex={ index }>
				<BottomNavigationItem
					icon={ fontIcon('vpn_key') }
					onClick={() => handleClick('AUTHORIZED')}
				/>
				<BottomNavigationItem
					icon={ fontIcon('format_list_bulleted', 180) }
					onClick={() => handleClick('ALL')}
				/>
			</BottomNavigation>
		</Paper>
	)
}

export default DoorFilters;
