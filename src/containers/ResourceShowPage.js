import React from 'react';
import {connect} from 'react-redux'
import {Card } from 'semantic-ui-react'

class ResourceShowPage extends React.Component {

  findCurrentResource () {
    if(this.props.resources[0]) {
      return this.props.resources.filter(r => r.id === parseInt(this.props.match.params.id))
    } else {
      return null;
    }
  }

  render() {
    console.log(this.findCurrentResource())
    return (
      <div>
        <Card
          className="resources"
          image={this.findCurrentResource() ? this.findCurrentResource()[0].photo : null}
          header={this.findCurrentResource() ? this.findCurrentResource()[0].name : null}
          meta={this.findCurrentResource() ? this.findCurrentResource()[0].resource_type : null}
          description={this.findCurrentResource() ? this.findCurrentResource()[0].description : null}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}
export default connect(mapStateToProps)(ResourceShowPage);
