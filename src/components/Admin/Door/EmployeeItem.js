import React from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Checkbox from 'material-ui/Checkbox';
import { lightBlueA200 } from 'material-ui/styles/colors'

export const EmployeeItem = ({ employee, handleClick }) => {
	return (
		<ListItem
			primaryText={ employee.name }
			rightAvatar={<Avatar src={ employee.avatar } />}
			leftCheckbox={ <Checkbox checked={ employee.selected } iconStyle={{ color: lightBlueA200 }} onClick={ handleClick } /> }
		/>
	)
}
