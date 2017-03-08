class APIs {
  constructor() {
    this.users = [
      { userName: 'Hamid', password: '1234' },
      { userName: 'Ehsan', password: '4321' }
    ]
  }

  getUsers() {
    return this.users
  }

  addUser(user) {
    this.users.push(user)
  }
}

export default APIs
