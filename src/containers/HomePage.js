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
          <h3>Looking for STEM ideas & resources?</h3>
          <h3><i>Click the appropriate subject in the menu at the top of this page.</i></h3>
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
          <div className="quote">
            <Container>
            <h3><i>"Discovery is seeing what everybody else has seen, and thinking what nobody else has thought."</i>
            <br></br>
            <i>~Albert Szent Gyorgyi</i></h3>
            </Container>
          </div>
          <Image className="tree footer" size="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5MlQSabEAmq62sTDJhrd4UoFI43GXlvHF5xc4qm1EjKEYiVw"/>
          <br></br>
            <div className="footer">
              <Segment inverted color="black">
              copyright 2019 Rsources
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
