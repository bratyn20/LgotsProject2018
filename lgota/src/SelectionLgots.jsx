import './MainComponent.css';
import Menu from './container/menu.jsx';
import Footer from './container/footer.jsx';
import News from './container/news.jsx';
import Slider from './container/slider.jsx';
import Opros from './container/opros.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';


@inject('routing', 'regStore')

@observer
class SelectionLgots extends Component {
      render(){
       

    // console.log(this.props.regStore.qest);
      let temp = this.props.regStore.qest.map((row, index) => {
        // console.log(index)
        return <Opros key={index} index={index} array={row.array} title={row.title}/>
      })
      // let temp = <Opros/>

     return (

      <div className="tool">
        <Menu/>

        {temp}
        

        <Footer/>
      
       </div>
     )
   }
}

export default SelectionLgots;