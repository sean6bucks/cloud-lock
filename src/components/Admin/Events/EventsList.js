import React from 'react'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { EventItem } from './EventItem'
import { ListHeader } from '../../globalUI'

export const EventsList = ({ events, filter }) => {

	const events_list = events
		.filter( event => {
			return !filter ? event : event.door.id === filter
		})
		.map( event => {
			return (
				<EventItem
					key={ `${ event.timestamp }` }
					timestamp={ event.timestamp }
					label={ event.label }
					door={ event.door }
					user={ event.user }
				/>
			)
		});

	return (
		<List style={{ padding: 0 }}>
			<ListHeader text="Event History" />
			<Divider />
			{ events_list }
		</List>
	)
}
