import React from 'react';
import {Redirect} from 'react-router-dom'
import {Image, Card} from 'semantic-ui-react'

const HomePage = ({currentUser}) => currentUser ? (
      <div>
        <br></br>
        <h1>{`Welcome ${currentUser.username}!`}</h1>
        <Card className="home-image">
          <Image src='http://www.spaceweek.ie/wp-content/uploads/2017/09/nasa-space-pictures-hd-hd-widescreen-11.jpg' />
        </Card>
        <br></br>
        <h2><i>"Discovery is seeing what everybody else has seen, and thinking what nobody else has thought."</i></h2>
        <h3>      ~Albert Szent Gyorgyi</h3>
      </div>
    ) : <Redirect to="/login" />

export default HomePage;
