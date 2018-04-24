
import '../MainComponent.css';
import { blue500, red500, greenA200} from 'material-ui/styles/colors';
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


@inject('routing')

@observer
class Admins extends Component {

    registr(e){
      this.x = e.target.value
      //console.log(this.x)
  }

  registr2(e){
      this.x2 = e.target.value
      //console.log(this.x)
  }

  registr3(e){
      this.x3 = e.target.value
      //console.log(this.x)
  }

     onClick(){
             fetch('http://localhost:8080/crtlgota' , {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // authorization: window.localStorage.getItem('key')
    },
    body: JSON.stringify( {
        name: this.x,
        text: this.x2, 
        size: this.x3,
        })
    }).then(response => {
    // if (response.ok) return response.json()
    // Message.setShow(true, 'danger', response.statusText)
    // console.log(response.json())
    return response.json()
    }).then (response => {
        console.log(response);
    //    if (response[0])  
      //    {
     //        console.log('вошел');
      //       this.props.routing.push('/admin')
      //    }
         
    })
    // console.log('вышло')
        }

      render(){
        const style = {
        margin: 20,
        // position: 'absolute', 
        // right: 0,
        // top: 0,
        };

        const styletxt = {
          color: 'white',  
        }
     return (

        <div className="tool111" style={style}>

           <p><b style = {styletxt} >Название:</b><br/>
            <input type="text" size="40" onChange = {e => this.registr(e)}/></p>
            
            <p><b style = {styletxt}>Размер:</b><br/>
            <input type="text" size="40" onChange = {e => this.registr3(e)}/></p>
            
             <p style = {styletxt} >Текст<br/>
            <textarea name="comment" cols="50" rows="10" onChange = {e => this.registr2(e)}></textarea></p>

            <RaisedButton label="Добавить льготу" style={style} onClick= {() => this.onClick()}/>

        </div>
      
     )
   }
}

export default Admins;