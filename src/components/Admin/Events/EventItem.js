import React from 'react'
import Moment from 'react-moment'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { grey200 } from 'material-ui/styles/colors'

export const EventItem = ({ timestamp, label, door, user }) => {
	const style = {
		padding: 10,
		borderBottom: `1px solid ${ grey200 }`
	}
	return (
		<ListItem
			leftAvatar={ <Avatar src={ user.avatar } /> }
			primaryText={ `${ label } (${ door.name })` }
			secondaryText={
				<p>
					<span style={{ color: '#000' }}>{ user.name }</span>:&nbsp;&nbsp;
					<Moment format="MMM D, YYYY - k:mm" date={ timestamp }>door.name</Moment>
				</p>
			}
			style={ style }
		/>
	)
}
