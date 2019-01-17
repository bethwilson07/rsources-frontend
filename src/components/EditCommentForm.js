import React from 'react';
import {Modal, Icon, Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updatingComment, deletingComment} from '../redux/actions'


class EditCommentForm extends React.Component {

  state = {
    showModal: false,
    content: this.props.comment.content
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
      post_id: this.props.comment.post_id,
      user_id: this.props.currentUser.id
    }
    this.props.dispatch(updatingComment(data, this.props.comment.id));
    this.handleClick();
  }

  removeComment = (commentId) => {
    this.props.dispatch(deletingComment(commentId))
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
          <Modal.Header>Update Comment</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required
                onChange={this.OnFormChanges}
                label='Comment' name="content" defaultValue={this.state.content}
                control='input' />
              <Modal.Actions>
                <Form.Button onClick={(event)=>this.handleSubmit(event)} type="submit">Submit</Form.Button>
              </Modal.Actions>
            </Form>
            <Button onClick={() => this.removeComment(this.props.comment.id)}>Delete Comment</Button>
          </Modal.Content>
        </Modal>
        </div>
    )
  }
}

export default connect()(EditCommentForm);
