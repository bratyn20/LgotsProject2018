
import '../MainComponent.css';
import { blue500, red500, greenA200} from 'material-ui/styles/colors';
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


@inject('routing')

@observer
class Menu extends Component {
      render(){
        const style = {
       // margin: 12,
        // position: 'absolute', 
        // right: 0,
        // top: 0,
        };
        // const CardExampleWithAvatar = () => (
         // );
        // const iconStyles = {
        // position: 'absolute',
        // left: 0,
        // top: 0,
        // width: '100px',
        // height: '100px'
        // };

        const blockStyles = {
        margin: 20,
        position: 'absolute',
        left: 0,
        top: 100,
        width: '400px',
        height: '450px',
        border: '4px double black',
        };


     return (

        <div className="tool11">

          <div className="Menu">
            <FlatButton label="Льготы семьи" onClick={() => this.props.routing.push('/news')}/>
            <FlatButton label="Новости" onClick={() => this.props.routing.push('/newsarray')}/>
            <FlatButton label="Каталог льгот" onClick={() => this.props.routing.push('/lgots')}/>
            <FlatButton label="НКО" />                  
          </div>

          <div className="reger">
            <FlatButton label="Вход" onClick={() => this.props.routing.push('/log')}/>
            <FlatButton label="Регистрация" style={style} onClick={() => this.props.routing.push('/reg')} />
          </div>

        </div>
      
     )
   }
}

export default Menu;