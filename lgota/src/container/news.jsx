import '../MainComponent.css';
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'



import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

@inject('routing')

@observer
class News extends Component {
      render(){

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

     

       

        <div className='blocks'>
                
                <div className="News" >
                
                  <Card className="cardNews">
                     <CardHeader className="headNews"
                        // title="URL Avatar"
                        // subtitle="Subtitle"
                        // avatar="images/jsa-128.jpg"
                      />
                  <CardMedia className= "imgNews"
                     overlay={<CardTitle title="картинка" subtitle="подпись к картинке" />}
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
                     overlay={<CardTitle title="картинка" subtitle="подпись к картинке" />}
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
                     overlay={<CardTitle title="картинка" subtitle="подпись к картинке" />}
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
      
      
     )
   }
}

export default News;
