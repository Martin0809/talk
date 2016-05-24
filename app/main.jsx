import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App.jsx'
import Login from './containers/Login.jsx'
import Chat from './containers/Chat.jsx'

import './styles/main.scss'

ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Chat } />
        <Route path="login" component={ Login } />
      </Route>
    </Router>
  ),
  document.getElementById('content')
)
