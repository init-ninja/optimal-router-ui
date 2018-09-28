import React, { Component } from 'react';
import InputContainer from './components/InputContainer'

class SidePane extends Component {
  render() {
    return (
      <div>
        <InputContainer onInputDone={this.props.onInputDone}/>
      </div>
    )
  }
}

export default SidePane;
