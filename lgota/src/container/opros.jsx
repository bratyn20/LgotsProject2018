import '../MainComponent.css';

import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { observer, inject } from 'mobx-react';
// import Checkbox from 'material-ui/Checkbox';
import MyCheckbox from './checkbox.jsx'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
this.checked = false

// <div>
              //    <Checkbox
              //     label="1 ответ"
              //  //   style={styles.checkbox}
              //      />

              //     <Checkbox
              //     label="1 ответ"
              //  //   style={styles.checkbox}
              //      />

              //     <Checkbox
              //      label="1 ответ"
              //      //   style={styles.checkbox}
              //         />

@inject('routing', 'regStore')//обращение с сторам

@observer
class Opros extends Component {
     
  
  click(index) {
    console.log(index)
    this.checked = !this.checked
        console.log(this.props.regStore.req)
    this.props.regStore.req[this.props.index].req = index
  }
      
      render(){
        console.log(this.props.index)
        
        let temp = this.props.array.map((row, index) => {
          console.log(index)
         
        return (<RadioButton key={index} value={index} label={row.title} onClick={() => this.click(index)} />)
        
        })
        
    
     return (
      <div className='Opros'> 
      
          <div className='Qwest'>{this.props.title}</div>
            <div className='Qwest'>
             <RadioButtonGroup name = {String(this.props.index)} >
              {temp}
            </RadioButtonGroup>
            </div>

        <RaisedButton label="Принять"/>

      </div>
      
     )
   }
}

export default Opros;