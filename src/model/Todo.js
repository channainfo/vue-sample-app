class Todo {
  constructor (todo = {}) {
    this.title = todo.title
    this.status = todo.status
  }
  set (title, status) {
    this.title = title
    this.status = status
  }

  pending () {
    return this.status === 'pending'
  }

  inprogress () {
    return this.status === 'in progress'
  }

  done () {
    return this.status === 'done'
  }

  reset () {
    this.title = ''
    this.status = 'pending'
  }

  start () {
    if (this.pending()) {
      this.status = 'in progress'
    } else if (this.inprogress()) {
      this.status = 'done'
    } else if (this.done()) {
      this.status = 'pending'
    }
  }

  rollback () {
    if (this.done()) {
      this.status = 'in progress'
    } else if (this.inprogress()) {
      this.status = 'pending'
    }
  }
}
export default Todo
