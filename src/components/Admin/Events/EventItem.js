import React from 'react'
import Moment from 'react-moment'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

export const EventItem = ({ timestamp, label, door, user }) => {
	return (
		<div>
			<ListItem
				leftAvatar={ <Avatar src={ user.avatar } /> }
				primaryText={ `${ label } (${ door.name })` }
				secondaryText={
					<p>
						<span style={{ color: '#000' }}>{ user.name }</span>:&nbsp;&nbsp;
						<Moment format="MMM D, YYYY - k:mm" date={ timestamp }>door.name</Moment>
					</p>
				}
			/>
			<Divider />
		</div>
	)
}
