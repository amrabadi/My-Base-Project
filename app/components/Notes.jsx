import React, { Component } from 'react'

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = { id: '', title: '', details: '' }
    this.addClicked = this.addClicked.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }


  addClicked(event) {
    event.preventDefault()
    const newNote = { noteID: this.state.id, noteTitle: this.state.title, noteDetails: this.state.details }
    if (newNote.noteID != '' && newNote.noteTitle != '' && newNote.noteDetails != '') {
      this.props.handleNote(newNote)
    }
    else {
      alert('Values can\'t be blank')
    }
    this.setState({ id: '', title: '', details: '' })
    alert('Bing!')
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [ name ]: value })
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Note</td>
            </tr>
          </thead>
          <tbody>
            {this.props.noteList.map((note, index) => <tr key={index}>
              <td>{note.noteID}</td>
              <td>{note.noteTitle}</td>
              <td>{note.noteDetails}</td>
            </tr>
            )}
          </tbody>
        </table>

        <input name="id" type="text" placeholder="ID" onChange={this.handleInputChange} value={this.state.id} />
        <input name="title" type="text" placeholder="Title" onChange={this.handleInputChange} value={this.state.title} />
        <input name="details" type="text" placeholder="Note Details" onChange={this.handleInputChange} value={this.state.details} />
        <button onClick={this.addClicked}>Add</button>
      </div>
    )
  }
}

export default Notes
