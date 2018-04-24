import './MainComponent.css';
import Menu from './container/menu.jsx';
import Footer from './container/footer.jsx';
import News from './container/news.jsx'
import Slider from './container/slider.jsx'
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'

@inject('routing', 'regStore')

@observer
class ListLgots extends Component {
  componentWillMount(){
    this.props.regStore.listQuery()
  }
      render(){
      if(this.props.regStore.loading) return <div/>
      let list = this.props.regStore.list.map((row, index) => {
        return (<div key={index}> <p className='NameLgots'>{row.name}</p> <p className='Razmer'>{row.size}</p></div>)
      })
      console.log(this.props.regStore.list, this.props.regStore.loading)
     return (
       
      <div className="tool">
        <Menu/>

        <div className='listLgot'>
        {list}
        </div>

        <Footer/>
      
       </div>
     )
   }
}

export default ListLgots;
