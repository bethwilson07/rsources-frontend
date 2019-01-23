import React from 'react';
import UpdateResource from '../components/UpdateResource'
import {connect} from 'react-redux'
import {fetchingResources} from '../redux/actions'
import {Card, Segment, Image, Breadcrumb} from 'semantic-ui-react'
import {Redirect, withRouter} from 'react-router-dom'

class ResourceShowPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingResources());
  }

  findCurrentResource () {
    if(this.props.resources[0]) {
      return this.props.resources.filter(r => r.id === parseInt(this.props.match.params.id))
    } else {
      return null;
    }
  }

  handleClick = (event) => {
    event.persist();
    this.props.history.goBack()
  }

  render() {
    return (this.props.currentUser ? (
      <div className="resource page">
        <br></br>
        <Breadcrumb>
          <Breadcrumb.Section onClick={this.handleClick}>Back</Breadcrumb.Section>
        </Breadcrumb>
        <br></br>
        <h1>{this.findCurrentResource() ? this.findCurrentResource()[0].name : null}</h1>
        <Card
          className="resources"
          image={this.findCurrentResource() ? this.findCurrentResource()[0].photo : null}
          header={this.findCurrentResource() ? this.findCurrentResource()[0].name : null}
          meta={this.findCurrentResource() ? `${this.findCurrentResource()[0].resource_type.split('_').join(" ")} submitted by ${this.findCurrentResource()[0].user.username}` : null}
          description={this.findCurrentResource() ? this.findCurrentResource()[0].description : null}
        ></Card>
      {this.findCurrentResource()[0].user.id === this.props.currentUser.id ? <UpdateResource history={this.props.history} currentUser={this.props.currentUser} resource={this.findCurrentResource()}/> : null}
      <div className="resources spacing bottom">
      </div>
      <div className="footer">
        <Segment inverted color="black">
        copyright 2019
        <br></br>
        <Image inline size="mini" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5MlQSabEAmq62sTDJhrd4UoFI43GXlvHF5xc4qm1EjKEYiVw"/>
        Rsources
        </Segment>
      </div>
      </div>)
      : <Redirect to="/login" />)
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}
export default withRouter(connect(mapStateToProps)(ResourceShowPage));
