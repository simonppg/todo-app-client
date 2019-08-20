<template>
  <v-app>
    <ToolBar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '../components/ToolBar'
export default {
  components: {
    ToolBar
  }
}
</script>

<style></style>
