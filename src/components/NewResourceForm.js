import React from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {postingResource} from '../redux/actions'

class NewResourceForm extends React.Component {

  state = {
    showModal: false,
    name: '',
    description: '',
    photo: '',
    documents: []
  }

  handleClick = () => this.setState({ showModal: !this.state.showModal })

  OnFormChanges = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
      this.setState({
        [targetName]: targetValue
      })
  }

  onFileChange = (e) => {
    this.setState({
      documents: e.target.files[0]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('resource[name]', this.state.name)
    formData.append('resource[description]', this.state.description,)
    formData.append('resource[photo]', this.state.photo)
    formData.append('resource[resource_type]', this.props.type)
    formData.append('resource[course_id]', this.props.courseId)
    formData.append('resource[user_id]', this.props.userId)
    formData.append('resource[documents]', this.state.documents)

    this.props.dispatch(postingResource(formData));
    this.setState({
      name: '',
    });
    this.handleClick();
    this.props.history.push(`/course/${this.props.courseId}/resources/${this.props.type}`);
  }

  getResourceType =() => {
    if (this.props.resource[0]) {
      return this.props.resource[0].resource_type.split('_').join(' ')
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Modal trigger={<Button color="blue" onClick={this.handleClick}>{ this.getResourceType() ? `Add ${this.getResourceType()}` : "Add"}</Button>}
          open={this.state.showModal}
          onClose={this.handleClick}
          centered={false}
          >
          <Modal.Header>{this.getResourceType() ? `Contribute a ${this.props.course.name} ${this.getResourceType()}!` : `Contribute a ${this.props.course.name} Resource!`}</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Resource Title' name="name" value={this.state.name}
                control='input' />
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Description' name="description" value={this.state.description}
                control='textarea' />
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Photo URL' name="photo" value={this.state.photo}
                control="input" placeholder="Photo Url" />
              <Form.Field
                onChange={this.onFileChange}
                control="input" type="file" name="file" files={this.state.documents}
                multiple
                />
              <Modal.Description>
                <p>By submitting this resource, you agree to allow other educators to use your materials.</p>
                <p>Thank you for sharing!</p>
              </Modal.Description>
              <Modal.Actions>
                <Form.Button color="blue" onClick={(event)=>this.handleSubmit(event)} type="submit">Submit</Form.Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default connect()(NewResourceForm);
