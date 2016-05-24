import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>im a Talk app!</p>
        { this.props.children }
      </div>
    )
  }
}
