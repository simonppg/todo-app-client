<template>
  <v-container fluid>
    <v-data-iterator
      :items="list_of_todos"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ itemsPerPageOptions }"
    >
      <template v-slot:default="computed">
        <v-row>
          <v-col
            v-for="list in list_of_todos"
            :key="list.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title
                ><h4>{{ list.todoTitle }}</h4></v-card-title
              >
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="todo in list.todos_list" :key="todo.id">
                  <v-list-item-content class="align-end">
                    {{ todo.description }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'nav',
  data: () => ({
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4
  }),
  computed: {
    ...mapGetters({
      list_of_todos: 'todos/list_of_todos'
    })
  },
  methods: {
    ...mapActions({
      addTodo: 'todos/addTodo'
    })
  }
}
</script>
