// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todo from './model/Todo'
import TodoItemx from './components/TodoItem'

// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Todo({title: 'Emailing', status: 'pending'})

let todos = [
  new Todo({title: 'Emailing', status: 'pending'}),
  new Todo({title: 'Researching', status: 'pending'}),
  new Todo({title: 'Applying', status: 'in progress'})
]
let todo = new Todo({status: 'pending'})

Vue.component('todo-item', {
  template: `
    <div>
    <slot></slot>
    {{todo.title}} {{todo.status}}
    <button v-on:click='$emit("enlarge-text")'> + </button>
    </div>
  `,
  props: ['todo']
})

let vue = new Vue({
  el: '#app',
  data: function () {
    return {
      message: 'Hello my vue app!',
      seen: true,
      todos: todos,
      todo: todo,
      itemSize: 14
    }
  },
  components: {
    TodoItemx
  },
  methods: {
    addTodo: function () {
      let newTodo = new Todo(this.todo)
      this.todos.push(newTodo)
      this.todo.reset()
    },
    pending: function (index) {
      return this.todos[index].pending()
    },
    inprogress: function (index) {
      return this.todos[index].inprogress()
    },
    done: function (index) {
      return this.todos[index].done()
    },
    startTodo: function (todo) {
      if (confirm('Are you sure to commit the action')) {
        todo.start()
      }
    },
    removeTodo: function (index) {
      if (confirm('Are you sure to remove this task: ' + this.todos[index].title)) {
        this.todos.splice(index, 1)
      }
    },
    onEnlargeText: function () {
      this.itemSize += 2
      console.log('Enlarge by 2 to the size: ' + this.itemSize)
    }
  }
})
vue.$message = 'Wah'
