import './MainComponent.css';
import Menuu from './container/menu.jsx';
import Footer from './container/footer.jsx';
import News from './container/news.jsx'
import Slider from './container/slider.jsx'
import Admins from './container/admins.jsx'
import AdminNews from './container/adminsnews.jsx'
import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';





import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';



@inject('routing')

@observer
class AdminLgot extends Component {
      render(){
       const style = {
      display: 'inline-block',
        margin: '16px 32px 16px 0',
        };


     return (

      <div className="tool">
        <Menuu/>

        <Paper style={style}>
       <Menu>
        <MenuItem primaryText="Добавить льготу" rightIcon={<Download />}/>
        <MenuItem primaryText="Добавить новость" rightIcon={<Download />}/>
        <MenuItem primaryText="Удалить льготу" rightIcon={<Delete />}/>
        <MenuItem primaryText="Удалить новость" rightIcon={<Delete />}/>
        </Menu>
       </Paper>

        <Admins/>

        <AdminNews/>

        <Footer/>
      
       </div>
     )
   }
}

export default AdminLgot;