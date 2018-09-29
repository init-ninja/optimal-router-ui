import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';

/*
 * Class to display the selected text
 * props:
 * onSelected : ref for function(key, text)
 * data : [
 *   {
 *     key [not implemented]
 *     text,
 *     icon [not implemented]
 *   }
 * ]  
 */
class SelectableList extends Component {
   constructor(props) {
      super(props)
      this.state = {
        selectedIndex: 1,
      };
      this.handleListItemClick = this.handleListItemClick.bind(this)
   }

   handleListItemClick = (index, text) => {
      this.setState({ selectedIndex: index })
      this.props.onSelected(index, text)
   };

   createList = () => {
      let items = []
      for (let index = 0; index < this.props.data.length; index++) {
         items.push(<ListItem
                       key={index}
                       button
                       selected={this.state.selectedIndex === index}
                       onClick={event => this.handleListItemClick(index, this.props.data[index]['text'])}>
                     <ListItemText primary={this.props.data[index]['text']} />
                     </ListItem>)
      }
      return items
   }

   render() {
      return (
         <div>
            <List component="nav">
               {this.createList()}
            </List>
         </div>
      )
   }
}

export default SelectableList
