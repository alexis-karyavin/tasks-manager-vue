<template>
  <div>
    <h1>Create Task</h1>
    <b-form @submit="onSubmit" @reset="onReset">
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
            placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data() {
    return {
      form: {
        title: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
    },
    onReset() {
      console.log('reset')
    }
  }
}
</script>
