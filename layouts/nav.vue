<template>
  <div>
    <!-- This doesn't work because this plugin doesn't have SSR -->
    <!--b-nav>
      <b-nav-item active>
        <nuxt-link to="/">Home Page</nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/about">About</nuxt-link>
      </b-nav-item>
    </b-nav-->

    <nuxt-link to="/">Home Page</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>

    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
