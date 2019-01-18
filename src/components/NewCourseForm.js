import React from 'react';
import {Button, Modal, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addingCourse} from '../redux/actions'

class NewCourseForm extends React.Component {

  state = {
    showModal: false,
    name: ''
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
      subject_id: this.props.subjectId
    }
    this.props.dispatch(addingCourse(data));
    this.setState({
      name: '',
    });
    this.handleClick();
    this.props.history.push(`/subject/${this.props.subjectId}`)
  }

  render() {
      return (
        <div>
          <br></br>
          <Modal trigger={<Button color="blue" compact onClick={this.handleClick}>Add New Course</Button>}
            open={this.state.showModal}
            onClose={this.handleClick}
            centered={false}
            >
            <Modal.Header>Add Course to {this.props.subjectName}</Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field
                onChange={this.OnFormChanges}
                label='Course Title'
                name="name"
                value={this.state.name}
                control='input' />
                <Modal.Actions>
                  <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Submit Course</Form.Button>
                </Modal.Actions>
              </Form>
            </Modal.Content>
          </Modal>
        </div>
      )
    }
  }

  export default connect()(NewCourseForm);
