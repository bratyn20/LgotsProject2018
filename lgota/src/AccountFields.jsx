import './AccountFields.css'
import TextField from 'material-ui/TextField';
import { observer, inject } from 'mobx-react'
import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';


//var React = require('react')
@inject('routing', 'regStore')
class AccountFields extends Component {
  componentWillMount(){
    this.x = ''
    this.x2 = ''
    this.x3 = ''
  }
  registr(e){
      this.x = e.target.value
      console.log(this.x)
  }
  registr2(e){
      this.x2 = e.target.value
      console.log(this.x2)
  }
  registr3(e){
      this.x3 = e.target.value
      console.log(this.x3)
  }
  OnClick(){
    //   console.log(this.x,this.x2,this.x3)
  //  console.log('зашло')
    fetch('http://localhost:8080/loggg' , {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // authorization: window.localStorage.getItem('key')
    },
    body: JSON.stringify( {
        login:'text',
        password:'password123456' 
        })
    }).then(response => {
    // if (response.ok) return response.json()
    // Message.setShow(true, 'danger', response.statusText)
    // console.log(response.json())
    return response.json()
    }).then (response => {
        console.log(response);
        if (response[0])  
          {
             console.log('вошел');
             this.props.routing.push('/admin')
          }
         
    })
    // console.log('вышло')
  }
  render(){
    return (
        <div className = 'login'>
        <label className = "label">Name</label>
        <input className = "input" type="text" onChange = {e => this.registr(e)} />
        <label className = "label">Password</label>
        <input className = "input" type="password" onChange = {e => this.registr2(e)}/>
        <label className = "label">Email</label>
        <input className = "input" type="email" onChange = {e => this.registr3(e)} />
        <FlatButton className = "pas" label="Забыли пароль?" />
        <button className = "knopka" onClick= {() => this.OnClick()}>Save and Continue</button>
      </div>
    )
  }
}

export default AccountFields 