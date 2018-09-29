import React from 'react'
import SelectableList from '../../../SelectableList/'

const _getLocationName = (point, input) => {
   // TODO: instead of spinning, a table based DS can be used.
   let loc="undefined"
   input.forEach((input) => {
      if ((point[0] === input['point'][0]) && (point[1] === input['point'][1])) {
         loc = input['loc']
         return
      }
   })
   return loc
}

const _getLocationNames = (data, input) => {
   let route=[]
   data['route'].forEach((rt) => route.push(_getLocationName(rt, input)))
   return route
}

const _getProcessedRoutes = (data, input) => {
   let ret = []
   data.forEach((dt) => ret.push({distance : dt['distance'], route: _getLocationNames(dt, input)}))
   return ret
}

class OutputContainer extends React.Component {

  // TODO: remaining
  onRouteSelected(key, text) {
     console.log("Selected : " + text )
  }

  render() {
     let routes = _getProcessedRoutes(this.props.routes, this.props.input)
     let distance = []
     routes.forEach((route) => distance.push({text: route['distance']}))
     return (
        <SelectableList
           onSelected={this.onRouteSelected.bind(this)}
           data={distance} />
     )
  }
}

export default OutputContainer
