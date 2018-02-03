export const sort = (arr, val) => {
	let new_array = arr;
    // IF NO SORT VAL JUST SORT ARRAY BY ITEM ( assume not objects )
	if ( !val ||  typeof val !== 'string' ) return new_array.sort();

	return new_array.sort( (a,b) => {
		const valA = a[val].toLowerCase();
		const valB = b[val].toLowerCase();
		return valA < valB ? -1 : valA > valB ? 1 : 0;
	})
}
