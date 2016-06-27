import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import App from './containers/App.jsx'
import Login from './containers/Login.jsx'
import Chat from './containers/Chat.jsx'

import './styles/main.scss'

ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRedirect to="/chat" />
        <Route path="chat" component={ Chat } />
        <Route path="login" component={ Login } />
      </Route>
    </Router>
  ),
  document.getElementById('talk')
)
