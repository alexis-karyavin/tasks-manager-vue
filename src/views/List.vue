<template>
  <div class="container-list">
    <h1>List</h1>
    <b-table
      striped
      hover
      :items="tasks"
      :fields="fields"
      v-if="tasks.length"
    >
      <template v-slot:cell(open)="row">
        <b-button
          variant="success"
          size="sm"
          @click="openTask(row.item.id)"
        >Open</b-button>
      </template>
    </b-table>
    <p v-else>No Tasks</p>
  </div>
</template>

<script>
  export default {
    name: "List",
    computed: {
      tasks() {
        let tasks = this.$store.getters.tasks;
        tasks = tasks.map(item => {
          return {
            ...item,
            tags: item.tags.join(', '),
          }
        });
        return tasks;
      },
      fields() {
        const tasks = this.$store.getters.tasks;
        if(tasks.length > 0) {
          let key = Object.keys(this.$store.getters.tasks[0])
          return [...key, 'open'];
        }
      }
    },
    methods: {
      openTask(id) {
        this.$router.push('/task/'+ id);
      }
    }
  }
</script>

<style scoped>

</style>
