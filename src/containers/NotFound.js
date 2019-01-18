import React from 'react'
import {Header, Segment} from 'semantic-ui-react'

const NotFound =() => {
  return (
    <div className="not">
      <div className="spacing top">
      </div>
        <Header size="huge" color="black">
          You're out of this world!
        </Header>
        <Header size="huge" color="black">
          PAGE NOT FOUND
        </Header>
      <div className="spacing bottom">
      </div>
      <div className="footer">
        <Segment inverted color="black">
        copyright 2019 Rsources
        </Segment>
      </div>
    </div>
  )
}

export default NotFound;
