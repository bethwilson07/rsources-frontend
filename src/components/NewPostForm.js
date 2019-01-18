import React from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addingPost} from '../redux/actions'


class NewPostForm extends React.Component {

  state = {
    showModal: false,
    content: ""
  }

  handleClick = () => this.setState({ showModal: !this.state.showModal })

  OnFormChanges = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
      this.setState({
        [targetName]: targetValue
      })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    let data = {
      content: this.state.content,
      course_id: this.props.courseId,
      user_id: this.props.currentUser.id
    }
    this.props.dispatch(addingPost(data))
    this.setState({
      content: '',
    });
    this.handleClick()
  }

  render() {
    return (
      <div>
        <Modal trigger={<Button onClick={this.handleClick} inverted>Create a Post</Button>}
          open={this.state.showModal}
          onClose={this.handleClick}
          centered={false}
          >
          <Modal.Header>Add Post</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field
              onChange={this.OnFormChanges}
              label='Content'
              name="content"
              value={this.state.content}
              control='input' />
              <Modal.Actions>
                <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Submit Post</Form.Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }

}

export default connect()(NewPostForm);
