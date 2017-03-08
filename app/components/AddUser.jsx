import React, { Component } from 'react'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = { userName: '', password: '' }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

  }
  handleChangeUsername(event) {
    this.setState({ userName: event.target.value })
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    this.setState({ [ name ]: target.value })
}

  render() {
    const { userName, password } = this.state
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add Users</h3>
        </div>
        <div className="panel-body">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="usernameInput">UserName</label>
              <input type="text" className="form-control" id="usernameInput" placeholder="Username" value={userName} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input type="Password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={this.handleInputChange} />
            </div>
            <button type="submit" className="btn btn-default">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser
