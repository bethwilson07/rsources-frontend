import React from 'react';
import {Header, Segment} from 'semantic-ui-react'

const TopNavBar =() => {
  return (
    <div>
      <Segment clearing >
        <Header as='h2' floated='left'>
          Welcome, User!
        </Header>
        <Header as='h2' floated='right'>
          Logout
        </Header>
      </Segment>
    </div>
  )
}

export default TopNavBar;
