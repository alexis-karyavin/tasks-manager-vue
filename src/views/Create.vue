<template>
  <div>
    <h1>Create Task</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
          id="input-group-1"
          label="Title"
          label-for="input-1"
          description=""
      >
        <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            :state="!!form.title"
            placeholder="Enter title"
        ></b-form-input>
        <b-form-invalid-feedback :state="(!!form.title)">Please enter title</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Tags">
        <b-form-tags
            input-id="tags-basic"
            v-model="form.tags"
            tag-variant="primary"
        ></b-form-tags>
      </b-form-group>
      <b-form-group label="Description">
        <b-form-textarea
          id="textarea-default"
          placeholder="Default textarea"
          v-model="form.description"
          :state="validateTextArea"
        ></b-form-textarea>
        <span class="countSymbols">{{ form.description.length }}/{{ maxCountSymbols }}</span>
      </b-form-group>
      <b-form-group label="Deadline">
        <b-form-datepicker v-model="form.deadline"></b-form-datepicker>
      </b-form-group>
      <b-button type="submit" variant="primary">Create Task</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data() {
    return {
      maxCountSymbols: 2048,
      form: {
        title: '',
        tags: [],
        description: '',
        deadline: this.getCurrentDate()
      }
    }
  },
  computed: {
    validateTextArea: function() {
      return this.form.description.length < this.maxCountSymbols && this.form.description.length !== 0;
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('createTask', {...this.form, status: "active"});
      this.$router.push('/list')
    },
    getCurrentDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`
    }
  }
}
</script>
<style scoped lang="scss">
  .countSymbols {

  }
</style>
