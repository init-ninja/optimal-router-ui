import React, { Component } from 'react';
import InputContainer from './components/InputContainer'
import OutputContainer from './components/OutputContainer'

class SidePane extends Component {
  render() {
    return (
      <div>
        <div>
          <InputContainer onInputDone={this.props.onInputDone}/>
        </div>
        <div>
          <OutputContainer input={this.props.input} routes={this.props.routes} />
        </div>
      </div>
    )
  }
}

export default SidePane;
