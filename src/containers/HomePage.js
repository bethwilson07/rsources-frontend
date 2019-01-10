import React from 'react';
import {Image, Card, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'

class HomePage extends React.Component {



  render() {
    return (
      <div>
        <Card className="home-image">
          <Image src='http://www.spaceweek.ie/wp-content/uploads/2017/09/nasa-space-pictures-hd-hd-widescreen-11.jpg' />
        </Card>
        <Container>
          Quote
        </Container>
      </div>
    )
  }
}

export default connect()(HomePage);
