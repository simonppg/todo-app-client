<template>
  <v-card class="elevation-12">
    <div class="primary headline text-center">Categories</div>
    <v-card-text align="center">
      <li
        v-for="todo in allLists"
        :key="todo.id"
        :class="{ strike: todo.done }"
      >
        {{ todo.todoTitle }}
      </li>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoLists',
  computed: {
    ...mapGetters({
      allLists: 'todos/allLists'
    })
  }
}
</script>

<style scoped>
h2 {
  font-size: 4vw;
}
</style>
