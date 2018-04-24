import './MainComponent.css';
import Menu from './container/menu.jsx';
import Footer from './container/footer.jsx';
import News from './container/news.jsx'
import Slider from './container/slider.jsx'
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'

@inject('routing')

@observer
class MainComponent extends Component {
      render(){
       


     return (

      <div className="tool">
        <Menu/>

        <Slider/>

        <News/>

        <Footer/>
      
       </div>
     )
   }
}

export default MainComponent;
