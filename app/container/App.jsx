import React, { Component } from 'react'
import Users from '../components/Users'
import APIs from '../services/APIs'

class App extends Component {
  constructor(props) {
    super(props)
    this.API = new APIs()
  }
  render() {
    return (
      <div>
        <Users userList={this.API.getUsers()}></Users>
      </div>
    )
  }
}

export default App
