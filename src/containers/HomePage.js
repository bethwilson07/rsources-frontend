import React from 'react';
import {Redirect} from 'react-router-dom'
import {Image, Card, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingNasa} from '../redux/actions'

class HomePage extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingNasa())
  }

  render ()  {
    console.log(this.props.nasa)
    return (this.props.currentUser ? (
        <div>
          <br></br>
          <h1>{`Welcome ${this.props.currentUser.username}!`}</h1>
            <div className="quote">
              <Container>
              <i>"Discovery is seeing what everybody else has seen, and thinking what nobody else has thought."</i>
              <br></br>
              <i>~Albert Szent Gyorgyi</i>
              </Container>
            </div>
          <Card className="home-image">
            <Image src={this.props.nasa.url} />
            <Card.Meta>{`copyright: ${this.props.nasa.copyright}, NASA Picture of the Day`}</Card.Meta>
          </Card>
          <Container>
            <h4>Explanation:</h4>
            <br></br>
            {this.props.nasa.explanation}
          </Container>
          <br></br>
        </div>
      ) : <Redirect to="/login" /> )
  }

}

const mapStatetoProps = state => {
  return {
    nasa: state.nasa
  }
}
export default connect(mapStatetoProps)(HomePage);
