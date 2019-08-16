<template>
  <v-card class="elevation-12">
    <div class="primary headline text-center">Active Todo list</div>
    <v-card-text align="center">
      <li
        v-for="todo in activeTodos"
        :key="todo.id"
        :class="{ strike: todo.done }"
      >
        {{ todo.description }}
      </li>
    </v-card-text>
    <v-card-actions>
      <AddTodo />
    </v-card-actions>
  </v-card>
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
