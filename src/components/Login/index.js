import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { lightBlueA200 } from 'material-ui/styles/colors'

// STYLES
const underline_style = { color: lightBlueA200 }
class Login extends Component {

	credentials = {
		username: '',
		password: ''
	}

	updateUsername = ({ target }) => {
		this.credentials.username = target.value;
	}
	updatePassword = ({ target }) => {
		this.credentials.password = target.value;
	}

	login = (e) => {
		e.preventDefault();
        // CURRENTLY NO LOGIN BACKEND SO USING mockApi
		this.props.action.login(this.credentials);
	}

	render() {
		return (
			<Dialog
				modal={true}
				open={true}
			>
				<form onSubmit={ this.login }>
					<TextField
						floatingLabelText="Username"
						floatingLabelFixed={true}
						fullWidth={true}
						underlineFocusStyle={ underline_style }
						onChange={ this.updateUsername }
					/>
					<TextField
						floatingLabelText="Password"
						floatingLabelFixed={true}
						type="password"
						fullWidth={true}
						underlineFocusStyle={ underline_style }
						onChange={ this.updatePassword }
					/>
					<RaisedButton
						label="Login"
						type="submit"
						backgroundColor={ lightBlueA200 }
						labelColor='#ffffff'
						fullWidth={true}
					/>
				</form>
			</Dialog>
		)
	}

}

export default Login;
