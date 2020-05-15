<template>
  <div class="container-list">
    <h1>List</h1>
    <b-table striped hover :items="tasks" v-if="tasks.length"></b-table>
    <p v-else>No Tasks</p>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {

      }
    },
    computed: {
      tasks() {
        let tasks = this.$store.getters.tasks;
        // tasks = {id, ...tasks};

        return tasks;
      },
    }
  }
</script>

<style scoped>

</style>
