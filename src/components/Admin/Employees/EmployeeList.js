import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { ListHeader, CreateNew } from '../../globalUI'

const EmployeeItem = ({ id, name, avatar, handleClick }) => {
	return (
		<ListItem
			className="admin__employee-list--item"
			primaryText={ name }
			rightAvatar={ <Avatar src={avatar} /> }
			onClick={ () => { handleClick(id) } }
		/>
	)
}

export const EmployeeList = ({ employees, showEmployee, newEmployee }) => {
	return (
		<List id='admin-employee-list' style={{ padding: 0 }}>
			<ListHeader text="Employees" />
			<Divider />
			{ employees.map( employee => (
				<EmployeeItem
					key={ `employee-${employee.id}`}
					id={ employee.id }
					name={ employee.name }
					avatar={ employee.avatar }
					handleClick={ showEmployee } />
			))}
			<CreateNew handleClick={ newEmployee }/>
		</List>
	)
}
EmployeeList.propTypes = {
	employees: PropTypes.array.isRequired
}
