import React from 'react'
import Geocoder from 'react-mui-mapbox-geocoder'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { MAPBOX_TOKEN } from '../../config'

class SearchBox extends React.Component {

  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(input) {
    this.props.add(this.props.id, input)
  }

  render() {
    console.log(this.props.loc)
    return (
    // TODO: fix the placeholder   
    <div>
      <Geocoder
        inputPlaceholder={this.props.loc}
        accessToken={MAPBOX_TOKEN}
        onSelect={this.handleSelect}
        showLoader={false}
      />
    </div>
    );
  }
}

class InputContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputs: []
    }
  }

  add(id, input) {
    //console.log("InputContainer> add : id = " + id + ", input = " + input)
    //console.log(input)
    console.log(input['place_name'])
    console.log(input['center'])
    var ips = this.state.inputs
    ips.push({id: id, loc: input['place_name'], point : input['center'] })
    this.setState({inputs: ips})
    console.log(this.state)

  }

  onDoneClick() {
    this.props.onInputDone(this.state.inputs)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.inputs.map((x,i) => <SearchBox key={i} id={x['id']} loc={x['loc']} add={this.add.bind(this)} /> )}
        </div>
        <div>
          <SearchBox id={this.state.inputs.length} loc="Enter location..." add={this.add.bind(this)} />
        </div>
        <Button variant="fab" color="primary" aria-label="Add" onClick={this.onDoneClick.bind(this)}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}


/*
<div>
  <SearchBox id={this.state.inputs.length} loc="Enter location..." add={this.add.bind(this)} />
</div>
*/
export default InputContainer
