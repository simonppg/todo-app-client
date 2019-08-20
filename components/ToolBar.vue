<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        <nuxt-link to="/">Todo app</nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text> <nuxt-link to="/test">test</nuxt-link> </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>
