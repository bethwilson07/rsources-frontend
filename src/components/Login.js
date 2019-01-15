import React from 'react';
import SignUp from './SignUp'
import {withRouter} from 'react-router-dom'
import {Button, Divider, Form, Grid, Segment} from 'semantic-ui-react'

class Login extends React.Component {

  state = {
      username: "",
      password: ""
    };

    handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
    };

    handleLoginSubmit = () => {
      fetch(`http://localhost:3000/login`, {
        method:"POST",
        headers: {
          "Content-type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(data => {
        if(data.error){
          alert('Incorrect username or password')
        }else{
          console.log(data)
          this.props.setCurrentUser(data.user_info)
          localStorage.setItem('token', data.token)
        }
      })
    };

  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Form onSubmit={this.handleLoginSubmit}>
                <Form.Input icon='user' iconPosition='left' label="username"
                placeholder="username"
                name="username"
                onChange={this.handleChange}
                value={this.state.username} />
                <Form.Input icon='lock' iconPosition='left' type="password"
                label="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password} />

              <Button content='Login' type="submit" primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <SignUp setCurrentUser={this.props.setCurrentUser} history={this.props.history}/>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    )
  }
}

export default withRouter(Login);
