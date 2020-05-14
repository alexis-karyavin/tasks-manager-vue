<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Tasks Manager</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
              tag="b-nav-item"
              to="/"
              exact
          >
            Create
          </router-link>
          <router-link
            tag="b-nav-item"
            to="/list"
            exact
          >
            List
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>
