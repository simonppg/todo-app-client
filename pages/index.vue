<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-card-title class="primary headline">
            Active Todo list
          </v-card-title>
          <v-card-actions>
            <form class="row" @submit="onSubmit">
              <v-col md="8">
                <v-text-field
                  v-model="description"
                  name="input-7-1"
                  label="Todo"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  hint="Type your todo here"
                />
              </v-col>
              <v-col md="4">
                <v-btn color="primary" type="submit" dark>Add todo</v-btn>
              </v-col>
            </form>
          </v-card-actions>
          <v-card-text align="center">
            <li
              v-for="todo in activeTodos"
              :key="todo.id"
              :class="{ strike: todo.done }"
            >
              {{ todo.description }}
            </li>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="list in list_of_todos"
        :key="list.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card class="elevation-12">
          <div class="primary headline text-center">{{ list.todoTitle }}</div>
          <v-card-text align="center">
            <li
              v-for="todo in list.todos_list"
              :key="todo.id"
              :class="{ strike: todo.done }"
            >
              {{ todo.description }}
            </li>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'nav',
  data() {
    return {
      description: 'example'
    }
  },
  computed: {
    ...mapGetters({
      allLists: 'todos/allLists',
      activeTodos: 'todos/activeTodos',
      list_of_todos: 'todos/list_of_todos'
    })
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (this.description !== '') {
        this.$store.dispatch('todos/addTodo', this.description)
        this.description = ''
      }
    }
  }
}
</script>
