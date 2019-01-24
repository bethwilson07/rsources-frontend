import React from 'react';
import {Redirect} from 'react-router-dom'
import {Image, Card, Segment, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingNasa} from '../redux/actions'

class HomePage extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingNasa())
  }

  render ()  {
    console.log(this.props.nasa)
    return (this.props.currentUser ? (
        <div className="home page">
          <br></br>
          <h1>{`Welcome to Rsources, ${this.props.currentUser.username}!`}</h1>
          <br></br>
          <h5>NASA Photo of the Day</h5>
          <Card className="home-image">
            <Image src={this.props.nasa.url} />
            <Card.Meta>{`copyright: ${this.props.nasa.copyright}, NASA Picture of the Day`}</Card.Meta>
            <Card.Content>
              <Container>
                <h4>Explanation:</h4>
              <br></br>
              {this.props.nasa.explanation}
              </Container>
            </Card.Content>
          </Card>
          <br></br>
          <br></br>
          <div className="quote">
            <h3><i>"Discovery is seeing what everybody else has seen, and thinking what nobody else has thought."</i>
            <br></br>
            <i>~Albert Szent Gyorgyi</i></h3>
          </div>
          <br></br>
          <Image className="little" size="small" src="https://i.stack.imgur.com/WMRSU.gif"/>
            <div className="footer">
              <Segment className="footer">
              copyright 2019
              <br></br>
              <Image inline size="mini" src="https://i.stack.imgur.com/WMRSU.gif"/>
              Rsources
              </Segment>
            </div>
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
