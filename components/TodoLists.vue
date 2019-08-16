<template>
  <div>
    <h2>Todo lists</h2>
    <ul>
      <li v-for="title in allLists" :key="title.id">{{ title.todoTitle }}</li>
    </ul>
  </div>
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
