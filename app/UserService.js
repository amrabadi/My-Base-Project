class UserService {
  constructor() {
    this.users = [
      { username: 'Hamid', password: '1234' },
      { username: 'Ehsan', password: '4321' }
    ]
  }

  userGet() {
    return this.users
  }

  userAdd(newUser) {
    this.users.push(newUser)
  }
}
export default new UserService()
