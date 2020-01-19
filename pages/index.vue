<template>
  <div>
    <p>Hello, {{ username }}</p>
    <increment-message :total="clicked" />
    <button @click="clicked += 1">
      Increment
    </button>
    <hr>
    <nuxt-link to="/secret">
      Go to secret page
    </nuxt-link>

    <hr>
    <UsernameFieldForm @username-changed="changeUsername" />
  </div>
</template>

<script>
import IncrementMessage from '~/components/IncrementMessage'
import UsernameFieldForm from '~/components/UsernameFieldForm'

export default {
  name: '',
  components: {
    IncrementMessage,
    UsernameFieldForm
  },
  data () {
    return {
      clicked: 0,
      username: 'world'
    }
  },
  methods: {
    changeUsername (updatedUsername) {
      this.username = updatedUsername
    }
  }
}
</script>
