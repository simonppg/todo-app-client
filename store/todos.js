const state = () => ({
  todoLists: [
    {
      todoTitle: 'Work',
      active: true,
      todos_list: [
        { description: 'Work hard', done: true },
        { description: 'Work harder', done: false }
      ]
    },
    {
      todoTitle: 'School',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      todoTitle: 'School',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      todoTitle: 'School',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      todoTitle: 'School',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    }
  ]
})

const getters = {
  allLists: (state) => state.todoLists.map(({ todoTitle }) => ({ todoTitle })),
  activeTodos: (state) =>
    state.todoLists.find((value) => value.active === true).todos_list,
  list_of_todos: (state) => state.todoLists
}

const actions = {
  addTodo: ({ commit, state }, todo) => {
    const list = state.todoLists.find((value) => value.active === true)
      .todos_list
    commit('newTodo', { list, todo })
  }
}
const mutations = {
  newTodo(state, { list, todo }) {
    list.push({ description: todo, done: false })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
