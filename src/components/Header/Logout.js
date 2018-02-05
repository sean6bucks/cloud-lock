import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export const Logout = ({ handleClick }) => {
	return <FlatButton onClick={ handleClick } style={{ color: '#fff', marginTop: 6 }} label="Logout" />
}
