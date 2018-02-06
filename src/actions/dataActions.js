import { TYPES } from '../constants'
import { getEventsList } from './eventsActions'

export const fetchingComplete = value => {
	return (dispatch, getState) => {
		dispatch({
			type: TYPES.FETCHING_COMPLETE,
			value
		});
		const fetching = getState().fetching;
		if( fetching.events && !fetching.doors && !fetching.employees ) {
			dispatch( getEventsList() );
		}
	}
}

export const resetFetching = () => {
	return {
		type: TYPES.RESET_FETCHING
	}
}
