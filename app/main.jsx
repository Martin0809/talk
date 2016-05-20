import React from 'react'
import ReactDOM from 'react-dom'

import './styles/main.scss'

class App extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div>
        <p>{ this.props.children }</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App>I'm a Talk app!</App>,
  document.getElementById('content')
)
