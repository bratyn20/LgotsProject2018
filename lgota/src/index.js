/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AccountFields';
import MainComponent from './MainComponent';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const X = () => (
    <MuiThemeProvider>
      <MainComponent/>
    </MuiThemeProvider>
);

ReactDOM.render(<X />, document.getElementById('root'));
registerServiceWorker();*/

import React from 'react'
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'     
import Main from './router'
//import 'bootstrap/dist/css/bootstrap.css'

/*ReactDOM.render(
<BrowserRouter>
<Main />
</BrowserRouter>,
document.getElementById('root')
)*/
const X = () => (
    <BrowserRouter>
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<X />, document.getElementById('root'));

registerServiceWorker()
