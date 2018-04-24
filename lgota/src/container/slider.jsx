
import '../MainComponent.css';

import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { observer, inject } from 'mobx-react'

@inject('routing')

@observer
class Slider extends Component {
      render(){
       
    


     return (

      
        
        
        <div className='img' >
        <RaisedButton className='PodborLgot' label="Подобрать льготы" onClick={() => this.props.routing.push('/selectlgots')}/>
        </div>
       
     )
   }
}

export default Slider;