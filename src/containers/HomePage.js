import React from 'react';
import {Image, Card} from 'semantic-ui-react'
import {connect} from 'react-redux'

class HomePage extends React.Component {



  render() {
    return (
      <div>
        <br></br>
        <h1>Welcome User!</h1>
        <Card className="home-image">
          <Image src='http://www.spaceweek.ie/wp-content/uploads/2017/09/nasa-space-pictures-hd-hd-widescreen-11.jpg' />
        </Card>
        <br></br>
        <h2><i>"Discovery is seeing what everybody else has seen, and thinking what nobody else has thought."</i></h2>
        <h3>      ~Albert Szent Gyorgyi</h3>
      </div>
    )
  }
}

export default connect()(HomePage);
