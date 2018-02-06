export const sort = (arr, val) => {
	let new_array = arr;
    // IF NO SORT VAL JUST SORT ARRAY BY ITEM ( assume not objects )
	if ( !val ||  typeof val !== 'string' ) return new_array.sort();

	return new_array.sort( (a,b) => {
		const valA = typeof a[val] === 'string' ? a[val].toLowerCase() : a[val];
		const valB = typeof b[val] === 'string' ? b[val].toLowerCase() : b[val];
		return valA < valB ? -1 : valA > valB ? 1 : 0;
	})
}

export const delay = (func, duration) => {
	setTimeout( func, duration );
}

export const generateId = (collection=[]) => {
	let max_id = 1;
	collection.forEach( obj => {
		max_id = obj.id > max_id ? obj.id : max_id;
	})
	return ( max_id + 1 )
}

export const newEvent = ({ type, user, door }) => {
	const label = type === 'unlock' ? 'Door Unlocked' :
				type === 'request' ? 'Access Requested' :
				type === 'unlock_failed' ? 'Unlock Failed' : 'Event'
	const time = new Date().getTime()
	return {
		label,
		user,
		door,
		timestamp: time
	}
}
