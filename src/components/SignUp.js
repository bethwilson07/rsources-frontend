import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Modal, Form} from 'semantic-ui-react';

class SignUp extends React.Component {

  state = {
    showModal: false,
    username: "",
    password: ""
  }

  handleClick = () => this.setState({ showModal: !this.state.showModal })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    }).then(r => r.json())
    .then(data => {
      if(data.error){
        alert('Incorrect username or password')
      }else{
        console.log(data)
        this.props.setCurrentUser(data.user_info)
        localStorage.setItem('token', data.token)
      }
    })
    this.props.history.push('/home')
  };

  render() {
    console.log(this.props.history)
    return (
      <div>
        <Modal trigger={<Button onClick={this.handleClick} content='Sign up' icon='signup' size='big' />}
          open={this.state.showModal}
          onClose={this.handleClick}
          centered={false}
          >
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
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
              <Modal.Actions>
                <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Sign Up</Form.Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default withRouter(SignUp)