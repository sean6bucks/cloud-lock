import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import { List } from 'material-ui/List'
import { lightBlueA200 } from 'material-ui/styles/colors'

import { EmployeeItem } from './EmployeeItem'
import { CloseButton, SaveButton } from '../../globalUI'

class Door extends Component {

	employeeItems = (employees=[]) => {
		return employees.map( employee => (
			<EmployeeItem
				key={ employee.id }
				employee={ employee }
				handleClick={ () => {
					this.selectEmployee(employee.id);
				}}
			/> )
		)
	}

	setNameValue = ({ target }) => {
		this.props.action.changeDoorName( target.value );
		this.props.action.changeDoorStatus( target.value ? 'dirty' : '' );
	}

	selectEmployee = employee_id => {
		const employees = this.props.door.employees.map( employee => {
			return employee.id === employee_id ? Object.assign({}, employee, { selected: !employee.selected }) : employee
		})
		this.props.action.updateDoorEmployees(employees);
		this.props.action.changeDoorStatus( this.props.door.name ? 'dirty' : '' );
	}

	updateDoor = () => {
		this.props.action.updateDoor(this.props.door);
	}

	hideDoor = () => {
		this.props.action.toggleDoor(false);
		this.props.action.resetDoor();
	}

	render() {
		const underline_style = { color: lightBlueA200 }

		return (
			<Dialog
				modal={true}
				open={ this.props.show }
				children={
					<div>
						<CloseButton
							handleClick={ this.hideDoor } />
						<TextField
							hintText="Door Name"
							defaultValue={ this.props.door.name }
							fullWidth={true}
							style={{ marginTop: 15 }}
							underlineFocusStyle={ underline_style }
							onChange={ this.setNameValue }
						/>
						<List>
							<Subheader>Authorized Employees</Subheader>
							{ this.employeeItems(this.props.door.employees) }
						</List>
					</div>
				}
				actions={
					<SaveButton
						id={ this.props.door.id }
						status={ this.props.door.status }
						handleClick={ this.updateDoor }
					/>
				}
				actionsContainerStyle={{ textAlign: 'center' }}
			/>
		)
	}
}

export default Door
