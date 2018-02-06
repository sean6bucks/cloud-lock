import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import { List } from 'material-ui/List'
import { lightBlueA200 } from 'material-ui/styles/colors'

import { DoorItem } from './DoorItem'
import { CloseButton, SaveButton } from '../../globalUI'

class Employee extends Component {

	doorItems = (doors=[]) => {
		return doors.map( door => (
			<DoorItem
				key={ door.id }
				door={ door }
				handleClick={ () => {
					this.selectDoor(door.id);
				}}
			/> )
		)
	}

	setNameValue = ({ target }) => {
		this.props.action.changeEmployeeName( target.value );
		this.props.action.changeEmployeeStatus( target.value ? 'dirty' : '' );
	}

	selectDoor = door_id => {
		const doors = this.props.employee.doors.map( door => {
			return door.id === door_id ? Object.assign({}, door, { selected: !door.selected }) : door
		})
		this.props.action.updateEmployeeDoors( doors );
		this.props.action.changeEmployeeStatus( this.props.employee.name ? 'dirty' : '' );
	}

	updateEmployee = () => {
		this.props.action.updateEmployee( this.props.employee );
	}

	hideEmployee = () => {
		this.props.action.toggleEmployee(false);
		this.props.action.resetEmployee();
	}

	render() {
		const underline_style = { backgroundColor: lightBlueA200 }

		return (
			<Dialog
				modal={true}
				open={ this.props.show }
				children={
					<div>
						<CloseButton
							handleClick={ this.hideEmployee } />
						<TextField
							hintText="Employee Name"
							defaultValue={ this.props.employee.name }
							fullWidth={true}
							style={{ marginTop: 15 }}
							underlineFocusStyle={ underline_style }
							onChange={ this.setNameValue }
						/>
						<List>
							<Subheader>Door Permissions</Subheader>
							{ this.doorItems(this.props.employee.doors) }
						</List>
					</div>
				}
				actions={
					<SaveButton
						status={ this.props.employee.status }
						handleClick={ this.updateEmployee }
					/>
				}
				actionsContainerStyle={{ textAlign: 'center' }}
			/>
		)
	}
}

export default Employee
