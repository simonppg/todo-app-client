<template>
  <form class="row" @submit="onSubmit">
    <div class="col-12 col-md-8">
      <input
        v-model="description"
        type="text"
        class="form-control"
        placeholder="Type your Todo."
      />
    </div>
    <div class="col-12 col-md-4 text-right">
      <input type="submit" class="btn btn-primary" value="Add todo" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      description: 'example'
    }
  },
  methods: {
    ...mapActions({
      addTodo: 'todos/addTodo'
    }),
    onSubmit(e) {
      e.preventDefault()
      if (this.description !== '') {
        this.addTodo(this.description)
        this.description = ''
      }
    }
  }
}
</script>
