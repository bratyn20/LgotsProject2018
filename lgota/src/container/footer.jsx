
import '../MainComponent.css';

import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'

@inject('routing')

@observer
class Footer extends Component {
      render(){
       
    


     return (

      
        

        <div className="footer"> Зайцев Владимир</div>
      
       
     )
   }
}

export default Footer;