class NotesAPI {

  constructor() {
    this.Notes = [
      { noteID: '1', noteTitle: 'Test1', noteDetails: 'This is a test' },
      { noteID: '2', noteTitle: 'Task', noteDetails: 'Only a simple task' },
      { noteID: '3', noteTitle: 'Meeting', noteDetails: 'Remember your meetings' }
    ]
  }

  getNotes() {
    return this.Notes
  }
  addNote(note) {
    this.Notes.push(note)
  }
}
export default NotesAPI
