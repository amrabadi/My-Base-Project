import React, { Component } from 'react'
import Users from '../components/Users'
import AddUser from '../components/AddUser'
import UserService from '../UserService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { users: UserService.userGet() }
    this.onAddUser = this.onAddUser.bind(this)
  }

  onAddUser(user) {
    UserService.userAdd(user)
    this.setState({ users: UserService.userGet() })
  }

  render() {
    return (
      <div>
        <Users userList={this.state.users}></Users>
        <AddUser handle={this.onAddUser} />
      </div>
    )
  }
}

export default App
