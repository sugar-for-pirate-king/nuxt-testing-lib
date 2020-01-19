<template>
  <div>
    <label for="username">Username</label>
    <input id="username" v-model="username" @keyup="updateUsername" name="username" type="text">
  </div>
</template>

<script>
export default {
  name: 'UsernameFieldForm',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    updateUsername () {
      this.$emit('username-changed', this.username)
    }
  }
}
</script>

<style>

</style>
