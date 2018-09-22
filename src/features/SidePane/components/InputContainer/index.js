import React from 'react'
import Geocoder from 'react-mui-mapbox-geocoder'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { MAPBOX_TOKEN } from '../../config'

class InputContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputs: [{
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

  handleSelectPoint() {

  }

  handleRemovePoint() {

  }

  render() {
    this.state.inputs.forEach(input => {
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
    })
  }
}
