import React from 'react'
import {Header, Image, Segment} from 'semantic-ui-react'

const NotFound =() => {
  return (
    <div className="not">
      <div className="spacing top">
      </div>
        <Header size="huge" color="black">
          ...your head is in the clouds...
        </Header>
        <br></br>
        <Header size="large" color="black">
          404
        </Header>
        <Header size="huge" color="black">
          PAGE NOT FOUND
        </Header>
      <div className="nfound">
      </div>
      <div className="footer">
        <Segment className="footer">
        copyright 2019
        <br></br>
        <Image inline size="mini" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5MlQSabEAmq62sTDJhrd4UoFI43GXlvHF5xc4qm1EjKEYiVw"/>
        Rsources
        </Segment>
      </div>
    </div>
  )
}

export default NotFound;
