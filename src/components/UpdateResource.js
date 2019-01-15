import React from 'react';
import {Modal, Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updatingResource, deletingResource} from '../redux/actions'

class UpdateResource extends React.Component {

  state = {
    showModal: false,
    name: this.props.resource[0].name,
    description: this.props.resource[0].description,
    photo: this.props.resource[0].photo
  }

  handleClick = () => this.setState({ showModal: !this.state.showModal })

  OnFormChanges = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
      this.setState({
        [targetName]: targetValue
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: this.state.name,
      description: this.state.description,
      photo: this.state.photo,
      resource_type: this.props.resource[0].resource_type,
      course_id: this.props.resource[0].course_id,
      user_id: this.props.currentUser.id
    }
    this.props.dispatch(updatingResource(data, this.props.resource[0].id));
    this.handleClick();
  }

  removeResource = (resourceId) => {
    this.props.dispatch(deletingResource(resourceId))
    this.handleClick();
    this.props.history.push(`/course/${this.props.resource[0].course_id}/resources/${this.props.resource[0].resource_type}`)
  }

  render() {
    return (
      <div>
        <Modal trigger={<Button onClick={this.handleClick}>Update Resource</Button>}
          open={this.state.showModal}
          onClose={this.handleClick}
          centered={false}
          >
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Resource Title' name="name" defaultValue={this.state.name}
                control='input' />
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Description' name="description" defaultValue={this.state.description}
                control='textarea' />
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Photo URL' name="photo" defaultValue={this.state.photo}
                control="input" placeholder="Photo Url" />
              <Modal.Description>
                <p>By submitting this resource, you agree to allow other educators to use your materials.</p>
                <p>Thank you for sharing!</p>
              </Modal.Description>
              <Modal.Actions>
                <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Submit</Form.Button>
                <Form.Button onClick={() => this.removeResource(this.props.resource[0].id)}>Delete Resource</Form.Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
        </div>
    )
  }
}

export default connect()(UpdateResource);
