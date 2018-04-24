import React, {Component} from 'react'

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

import { observer, inject } from 'mobx-react'

import '../MainComponent.css';

this.checked = false
@inject('routing', 'regStore')
//  добавление store,

@observer
class myCheckbox extends Component {
    //  state = {
    //     checked: true,
    // }

//   updateCheck() {
//     this.setState((oldState) => {
//       return {
//         checked: !oldState.checked,
//       };
//     });
//   }


    click() {
        this.checked = !this.checked
        console.log(this.props.regStore.req[this.props.indexQ])
    //   if (this.checked) this.props.regStore.req[this.props.indexQ].req = this.props.index
    //     else this.props.regStore.req[this.props.indexQ].req = 'none'
    }
    render(){
        console.log("olololo")
     return (
        
         <div key={this.props.key}>
         
            <RadioButton  value={this.props.key} label={this.props.label} onClick={() => this.click()} />
         
        </div>  
       
     )
   }
}

export default myCheckbox;
