import axios from 'axios'
import { TYPES } from '../constants'
import { endpoint } from '../config/endpoint'
import { delay } from '../utilities/helpers'
import { addEvent } from './eventsActions'

export const toggleLock = show => {
	return {
		type: TYPES.TOGGLE_LOCK,
		show
	}
}

export const showLock = door => {
	return {
		type: TYPES.SHOW_LOCK,
		payload: door
	}
}
export const resetLock = () => {
	return {
		type: TYPES.RESET_LOCK
	}
}

const changeLockStatus = status => {
	return {
		type: TYPES.CHANGE_LOCK_STATUS,
		payload: { status }
	}
}
export const unlockDoor = id => {
    const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeLockStatus('unlocking') );
		request.then(
			({data}) => {
                // CREATE FAKE FAIL FOR DEMO PURPOSE
				if ( getState().lock.fail ) {
					throw new Error("Error: Mock Failed Unlock");
				}
				dispatch({
					type: TYPES.UNLOCK_DOOR,
					payload: { status: 'unlocked' }
				});
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'unlock', getState().lock ) );
				delay( () => {
					dispatch( toggleLock(false) );
					dispatch( resetLock() );
				}, 500)
			}
		).catch(
			(error) => {
				console.log(`
					== ERROR: Unlock Door ==
					${ error }
					========================
				`)
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'unlock_failed', getState().lock ) );
				dispatch( changeLockStatus('unlock_failed') );
			}
		)
	}
}

export const requestAccess = id => {
	const request = axios.post( endpoint + '/unlock', { id })
	return (dispatch, getState) => {
		dispatch( changeLockStatus('requesting') );
		request.then(
			({data}) => {
				dispatch({
					type: TYPES.REQUEST_ACCESS,
					payload: { status: 'requested' }
				});
				// ADD EVENT TO HISTORY
				dispatch( addEvent( 'request', getState().lock ) );
				delay( ()=> {
					dispatch( toggleLock(false) );
					dispatch( resetLock() );
				}, 500 )
			}
		).catch(
			(error) => {
				console.log(`
					== ERROR: Request Access ==
					${ error }
					===========================
				`)
				dispatch( changeLockStatus('request_failed') );
			}
		)
	}
}
