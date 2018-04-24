import './MainComponent.css';
import Menu from './container/menu.jsx';
import Footer from './container/footer.jsx';
import News from './container/news.jsx'
import Slider from './container/slider.jsx'
import RaisedButton from 'material-ui/RaisedButton'
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'

@inject('routing')

@observer
class NewsLgotss extends Component {
      render(){
       


     return (

      <div className="tool">
        <Menu/>

        <Slider/>

        <div className="Newsnew">
            <div>
                <h2 className="Namenews">Название</h2>
                <p className="Datenews">Дата публекации</p>
                <h3 className="TextNews">Текст новости</h3>
                <RaisedButton label="Подробнее" />
            </div>

            <div>
                <h2 className="Namenews">Название</h2>
                <p className="Datenews">Дата публекации</p>
                <h3 className="TextNews">Текст новости</h3>
                <RaisedButton label="Подробнее" />
            </div>
        </div>

        <Footer/>
      
       </div>
     )
   }
}

export default NewsLgotss;