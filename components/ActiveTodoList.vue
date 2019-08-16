<template>
  <div>
    <AddTodo />
    <div class="row">
      <ul>
        <li
          v-for="todo in activeTodos"
          :key="todo.id"
          :class="{ strike: todo.done }"
        >
          {{ todo.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import consola from 'consola'
import AddTodo from './AddTodo'

export default {
  name: 'ActiveTodoList',
  components: {
    AddTodo
  },
  computed: {
    ...mapGetters({
      activeTodos: 'todos/activeTodos'
    })
  }
}
</script>

<style scoped>
h2 {
  font-size: 4vw;
}
.strike {
  text-decoration: line-through;
}
</style>
