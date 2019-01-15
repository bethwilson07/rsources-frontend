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

  handleSubmit = () => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: 'newUser',
          password: 'hello'
        }
      })
    }).then(r => r.json()).then(console.log)
    this.setState({
      username: '',
      password: ''
    });
    this.handleClick();
    this.props.history.push(`/home`);
  };

  render() {

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
