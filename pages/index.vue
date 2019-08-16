<template>
  <div class="container">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from '~/components/TodoApp.vue'

export default {
  layout: 'nav',
  components: {
    TodoApp
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
