import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import { List } from 'material-ui/List'
import { lightBlueA200 } from 'material-ui/styles/colors'

import { CloseButton } from '../../globalUI'
import { EmployeeItem } from './EmployeeItem'
import { SaveButton } from './SaveButton'

const getNewPermissions = (employees=[]) => {
	return employees.filter( employee => employee.selected ).map( employee => employee.id );
}

class Door extends Component {

	new_name = ''

	authorizedEmployees = (employees=[]) => {
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
		this.new_name = target.value;
		this.props.action.changeDoorStatus('dirty');
	}

	selectEmployee = employee_id => {
		const employees = this.props.door.employees.map( employee => {
			return employee.id === employee_id ? Object.assign({}, employee, { selected: !employee.selected }) : employee
		})
		this.props.action.updateDoorEmployees(employees);
		this.props.action.changeDoorStatus('dirty');
	}

	updateDoor = () => {
		const door = Object.assign( {}, this.props.door, {
			name: this.new_name,
		 	permissions: getNewPermissions(this.props.door.employees)
		});
		this.props.action.updateDoor(door);
	}

	hideDoor = () => {
		this.props.action.toggleDoor(false);
		this.props.action.resetDoor();
	}

	componentWillRender() {
		this.authorized_employees = this.setAuthorizedEmployees();
	}

	render() {
		const underline_style = { color: lightBlueA200 }

		return (
			<Dialog
				className="admin__door"
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
							{ this.authorizedEmployees(this.props.door.employees) }
						</List>
					</div>
				}
				actions={
					<SaveButton
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
