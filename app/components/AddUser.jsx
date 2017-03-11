import React, { Component } from 'react'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addButtonClicked = this.addButtonClicked.bind(this)
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [ name ]: value })
  }

  addButtonClicked(event) {
    event.preventDefault()
    const { handle } = this.props
    const { username, password } = this.state
    handle({ username, password })
    this.setState({ username: '', password: '' })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <input type="Text" name="username" placeholder="Username" value={username} onChange={this.handleInputChange} />
        <input type="Password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} />
        <button onClick={this.addButtonClicked}>Add</button>
      </div>
    )
  }
}

export default AddUser
