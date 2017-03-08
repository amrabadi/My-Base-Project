import React, { Component } from 'react'
import AddUser from './AddUser'

class Users extends Component {
  userView(user, index) {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{user.userName}</td>
        <td>{user.Password}</td>
      </tr>)
  }

  render() {
    return (
      <div>
        <AddUser></AddUser>
        <table className="table table-striped">
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
      </div >
    )
  }
}

export default Users
