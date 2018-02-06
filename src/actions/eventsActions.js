import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { newEvent } from '../utilities/helpers'
import { fetchingComplete } from './dataActions'

export const getEventsList = () => {
	const request = axios.get( endpoint + '/events' )
	return (dispatch, getState) => {
		request.then(
			({data}) => {
				const events = data.events.map( event => {
					const user = getState().employees.find( employee => employee.id === event.user );
					const door = getState().doors.find( door => door.id === event.door );
					return Object.assign( {}, event, {
						user,
						door
					})
				})
				dispatch({
					type: TYPES.GET_EVENTS_LIST,
					payload: events
				});
				dispatch( fetchingComplete('events') );
			}
		)
	}
}

export const updateEventsList = events => {
	return {
			type: TYPES.UPDATE_EVENTS_LIST,
			payload: events
	}
}

export const addEvent = (type, door) => {
	return (dispatch, getState) => {
		const events = getState().events;
		const event = newEvent({
			type,
			door,
			user: getState().user
		})
		events.unshift(event);
		dispatch({
			type: TYPES.UPDATE_EVENTS_LIST,
			payload: events
		});
	}
}
