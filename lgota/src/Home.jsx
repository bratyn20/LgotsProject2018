import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import './MainComponent.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';


import { blue500, red500, greenA200} from 'material-ui/styles/colors';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'


import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

@inject('routing')

@observer
class MainComponent extends Component {
      render(){
        const style = {
       // margin: 12,
        // position: 'absolute', 
        // right: 0,
        // top: 0,
        };
        // const CardExampleWithAvatar = () => (
         // );
        const iconStyles = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100px',
        height: '100px'
        };

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

      <div className="tool">
        <div className="tool11">

          <div className="Menu">
          <FontIcon className="muidocs-icon-action-home" style={iconStyles} color={red500} hoverColor={greenA200} />
            <FlatButton label="Новости" />
            <FlatButton label="Каталог льгот" />
            <FlatButton label="НКО" />                  
          </div>

          <div className="reger">
            <FlatButton label="Вход" onClick={() => this.props.routing.push('/log')}/>
            <FlatButton label="Регистрация" style={style} onClick={() => this.props.routing.push('/reg')} />
          </div>

        </div>

        <div>
                <div className="News" style= {blockStyles}>
                
                  <Card className="cardNews">
                     <CardHeader className="headNews"
                        // title="URL Avatar"
                        // subtitle="Subtitle"
                        // avatar="images/jsa-128.jpg"
                      />
                  <CardMedia className= "imgNews"
                     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                   >
                      <img src="" alt="" />
                  </CardMedia>
                 <CardTitle title="Название" className="titleNews" subtitle="Что то ещё" />
                  <CardText className="titleNews1">
                    Текст новости
                  </CardText>
                    <CardActions className="actionNews">
                    <FlatButton className="NewsButton1" label="Action1" />
                    </CardActions>
                  </Card>
             
                </div>

                <div className="News2" >
                
                  <Card className="cardNews">
                     <CardHeader className="headNews"
                        // title="URL Avatar"
                        // subtitle="Subtitle"
                        // avatar="images/jsa-128.jpg"
                      />
                  <CardMedia className= "imgNews"
                     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                   >
                      <img src="" alt="" />
                  </CardMedia>
                 <CardTitle title="Название" className="titleNews" subtitle="Что то ещё" />
                  <CardText className="titleNews1">
                    Текст новости
                  </CardText>
                    <CardActions className="actionNews">
                    <FlatButton className="NewsButton1" label="Action1" />
                    </CardActions>
                  </Card>
             
                </div>

                <div className="News3" >
                
                  <Card className="cardNews">
                     <CardHeader className="headNews"
                        // title="URL Avatar"
                        // subtitle="Subtitle"
                        // avatar="images/jsa-128.jpg"
                      />
                  <CardMedia className= "imgNews"
                     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                   >
                      <img src="" alt="" />
                  </CardMedia>
                 <CardTitle title="Название" className="titleNews" subtitle="Что то ещё" />
                  <CardText className="titleNews1">
                    Текст новости
                  </CardText>
                    <CardActions className="actionNews">
                    <FlatButton className="NewsButton1" label="Aon1cti" />
                    </CardActions>
                  </Card>
             
                </div>
        </div>

        <div className="footer"> Зайцев Владимир</div>
      
       </div>
     )
   }
}

export default MainComponent;
