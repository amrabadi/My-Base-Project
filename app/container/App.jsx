import React, { Component } from 'react'
import Notes from '../components/Notes'
import NotesAPI from '../services/NotesAPI'

class App extends Component {
  constructor(props) {
    super(props)
    this.notesAPI = new NotesAPI()
    this.insertNote = this.insertNote.bind(this)
    this.state = { notes: this.notesAPI.getNotes() }
  }

  insertNote(note) {
    this.notesAPI.addNote(note)
    this.setState({ notes: this.notesAPI.getNotes() })
  }

  render() {
    return (
      <div>
        <Notes noteList={this.state.notes} handleNote={this.insertNote}></Notes>
      </div>
    )
  }
}

export default App
