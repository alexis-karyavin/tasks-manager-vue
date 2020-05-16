<template>
  <div v-if="!!task">
    <h1>{{task.title}}</h1>
    <b-form @submit.prevent="onSave">
      <b-form-group label="Description">
        <b-form-textarea
                id="textarea-default"
                placeholder="Default textarea"
                v-model="task.description"
                :state="validateTextArea"
        ></b-form-textarea>
        <span class="countSymbols">{{ task.description.length }}/{{ maxCountSymbols }}</span>
      </b-form-group>
      <b-form-group label="Deadline">
        <b-form-datepicker v-model="task.deadline"></b-form-datepicker>
      </b-form-group>
      <b-button type="submit" variant="success" class="mr-3">Save</b-button>
      <b-button type="submit" variant="danger">Close Task</b-button>
    </b-form>
  </div>
  <h1 v-else> Not Found Task</h1>
</template>

<script>
  export default {
    name: "Task",
    data() {
      return {
        maxCountSymbols: 2048,
      }
    },
    computed: {
      task() {
        return this.$store.getters.taskById(+this.$route.params.id);
      },
      validateTextArea: function() {
        return this.task.description.length < this.maxCountSymbols && this.task.description.length !== 0;
      },
    },
    methods: {
      onSave() {
        this.$store.dispatch('updateTask', this.task);
        this.$router.push('/list');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
