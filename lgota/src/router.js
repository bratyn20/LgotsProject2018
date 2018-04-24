import {Switch,Route, Router} from 'react-router-dom'
import Regist from './AccountFields.jsx'
import MainComponent from './MainComponent.jsx'
import ListLgots from './ListLgots.jsx'
import SelectionLgots from './SelectionLgots.jsx'
import AdminLgot from './AdminLgot.jsx'
import NewsLgotss from './NewsLgots.jsx'
// import Admins from './containers/adminList'
// import Bots from './containers/botList'
// import Users from './containers/userList'
// import Tree from './containers/tree'
import React from 'react'

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Provider } from 'mobx-react'
import regStore from './store.js'
// import userStore from './store/users'
// import botStore from './store/bots'
// import treeStore from './store/tree'
import createBrowserHistory from 'history/createBrowserHistory'
//import Map from './components/Map'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const stores = {
regStore,
// adminStore,
// userStore,
// botStore,
// treeStore,
routing: routingStore
}

const history = syncHistoryWithStore(browserHistory, routingStore)

const Main = () =>
<main>
<Provider {...stores}>
<Router history={history}>
<Switch>
<Route exact path="/" render={() => <MainComponent />} />
<Route exact path="/news" render={() => <MainComponent />} />
<Route exact path="/reg" render={() => <Regist />} />
<Route exact path="/log" render={() => <Regist />} />
<Route exact path="/lgots" render={() => <ListLgots />} />
<Route exact path="/selectlgots" render={() => <SelectionLgots />} />
<Route exact path="/admin" render={() => <AdminLgot />} />
<Route exact path="/newsarray" render={() => <NewsLgotss />} />
{/*<Route exact path="/users" render={() => <Users />} />
<Route exact path="/bots" render={() => <Bots />} />
<Route exact path="/tree" render={() => <Tree />} />
<Route exact path="/map" render={() => <Map />} />*/}
</Switch>
</Router>
</Provider>
</main>

export default Main