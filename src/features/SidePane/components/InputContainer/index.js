import React from 'react'
import Geocoder from 'react-mui-mapbox-geocoder'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { MAPBOX_TOKEN } from '../../config'

class InputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.renderRowTemplate = this.renderRowTemplate.bind(this)

    this.state = {
      rows: [{
        id: 0,
        address: 'Stockholm'
      }, {
        id: 1,
        address: 'Stockholm'
      }, {
        id: 2,
        address: 'Stockholm'
      }]
    }
  }

  renderRowTemplate() {
    return (
      <div>
        <Geocoder
          inputPlaceholder="Search Address"
          accessToken={MAPBOX_TOKEN}
          onSelect={this.handleSelectPoint}
          showLoader={true}
        />
        <Button variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    )
  }

  handleSelectPoint() {

  }

  handleRemovePoint() {

  }

  render() {
    return (
      <div>
        {this.state.rows.map(this.renderRowTemplate)}
      </div>
    )
  }
}

export default InputContainer
