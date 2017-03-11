import React, { Component } from 'react'

class Users extends Component {

  userView(user, index) {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
      </tr>
    )
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Number</td>
              <td>Username</td>
              <td>Password</td>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((user, index) => this.userView(user, index))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Users
