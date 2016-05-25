import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}
