<template>
  <div>
    <p>Hello, world</p>
    <increment-message :total="clicked" />
    <button @click="clicked += 1">
      Increment
    </button>
  </div>
</template>

<script>
import IncrementMessage from '~/components/IncrementMessage'
export default {
  name: '',
  components: {
    IncrementMessage
  },
  data () {
    return {
      clicked: 0
    }
  }
}
</script>
