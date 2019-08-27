const state = () => ({
  todoLists: [
    {
      id: 1,
      todoTitle: 'Work',
      active: true,
      todos_list: [
        { description: 'Work hard', done: true },
        { description: 'Work harder', done: false }
      ]
    },
    {
      id: 2,
      todoTitle: 'School1',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      id: 3,
      todoTitle: 'School2',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      id: 4,
      todoTitle: 'School3',
      active: false,
      todos_list: [
        { description: 'math homework', done: false },
        { description: 'homework hard', done: true },
        { description: 'Work homework', done: false }
      ]
    },
    {
      id: 5,
      todoTitle: 'School4',
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
