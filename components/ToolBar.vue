<template>
  <v-app-bar app>
    <v-toolbar-title>
      <v-btn text to="/" nuxt>Home</v-btn>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn text to="/test" nuxt>test</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>
