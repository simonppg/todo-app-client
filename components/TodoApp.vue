<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <TodoLists />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <ActiveTodoList />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoLists from './TodoLists'
import ActiveTodoList from './ActiveTodoList'

export default {
  name: 'TodoApp',
  components: {
    TodoLists,
    ActiveTodoList
  },
  computed: {
    ...mapGetters({
      activeTodos: 'todos/activeTodos'
    })
  }
}
</script>
