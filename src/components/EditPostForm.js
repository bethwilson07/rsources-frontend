import React from 'react';
import {Modal, Icon, Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updatingPost, deletingPost} from '../redux/actions'


class EditPostForm extends React.Component {

  state = {
    showModal: false,
    content: this.props.post.content
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
      content: this.state.content,
      course_id: this.props.post.course_id,
      user_id: this.props.currentUser.id
    }
    this.props.dispatch(updatingPost(data, this.props.post.id));
    this.handleClick();
  }

  removePost = (postId) => {
    this.props.dispatch(deletingPost(postId))
    this.handleClick();
  }

  render() {
    return (
      <div>
        <Modal trigger={<Icon onClick={this.handleClick} link name="edit" floated="right"/>}
          open={this.state.showModal}
          onClose={this.handleClick}
          centered={false}
          >
          <Modal.Header>Update Post</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Post Title' name="content" defaultValue={this.state.content}
                control='input' />
              <Modal.Actions>
                <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Submit</Form.Button>
              </Modal.Actions>
            </Form>
            <Button onClick={() => this.removePost(this.props.post.id)}>Delete Post</Button>
          </Modal.Content>
        </Modal>
        </div>
    )
  }
}

export default connect()(EditPostForm);
