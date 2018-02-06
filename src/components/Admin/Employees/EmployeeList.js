import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { ListHeader, CreateNew } from '../../globalUI'
// COMPONENTS
import { EmployeeItem } from './EmployeeItem'

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
