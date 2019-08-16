<template>
  <div class="container-fluid col-10 border border-success">
    <div class="row justify-content-center">
      <h1>My Todo App</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-3">
        <TodoLists />
      </div>
      <div class="col-12 col-md-9">
        <ActiveTodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoLists from './TodoLists'
import ActiveTodoList from './ActiveTodoList'

export default {
  name: 'TodoApp',
  components: {
    TodoLists,
    ActiveTodoList
  }
}
</script>

<style scoped>
h1 {
  font-size: 6vw;
}

div {
  border: 1px dashed red;
}
li {
  list-style-type: none;
}
ul {
  border: 1px dashed red;
}
</style>
