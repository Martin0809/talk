import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import App from './containers/App.jsx'
// import Login from './containers/Login.jsx'
// import Chat from './containers/Chat.jsx'
// import Try from './containers/Try.jsx'
import 'antd/dist/antd.css';

import './styles/main.scss'

const routes = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: App,
      childRoutes: [
        require('./routes/login'),
        require('./routes/chat')
      ]
    }
  ]
}

//if(module.hot)
//    module.hot.accept();
ReactDOM.render((
    <Router history={ browserHistory } routes={ routes } />
  ),
  document.getElementById('talk')
)

// ReactDOM.render((
//     <Router history={ browserHistory }>
//       <Route path='/' component={ App }>
//         <IndexRedirect to="/chat" />
//         <Route path="chat" component={ Chat } />
//         <Route path="login" component={ Login } />
//         <Route path="try" component={ Try } />
//       </Route>
//     </Router>
//   ),
//   document.getElementById('talk')
// )
