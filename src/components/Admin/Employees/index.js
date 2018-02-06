import React, { Component } from 'react'
import PropTypes from 'prop-types'
// CONTINERS
import Employee from '../../../containers/AdminEmployee'
// COMPONENTS
import { LoadShade } from '../../globalUI'
import { EmployeeList } from './EmployeeList'

const defaultUser = {
	name: '',
	access: [],
	avatar: 'https://naijacrawl.com/uploads/NO-IMAGE-AVAILABLE.jpg'
}

class Employees extends Component {

	static propTypes = {
		employees: PropTypes.array.isRequired
	}

	findEmployee = (id) => {
		if ( typeof id === 'string' ) id = parseInt(id, 10);
		return this.props.employees.find( employee => id === employee.id )
	}

	toggleEmployee = show => {
		this.props.action.toggleEmployee(show);
	}

	newEmployee = () => {
		this.props.action.showEmployee(defaultUser);
		this.toggleEmployee(true);
	}

	showEmployee = id => {
		const employee = this.findEmployee(id);
		this.props.action.showEmployee(employee);
		this.toggleEmployee(true);
	}

	render() {
		return (
			this.props.fetching.employees ? (
				<LoadShade />
			) : (
				<div>
					<EmployeeList
						employees={ this.props.employees }
						showEmployee={ this.showEmployee }
						newEmployee={ this.newEmployee } />
					<Employee />
				</div>
			)
		)
	}
}

export default Employees;
