<template>
  <div>
    <custom-message>
      You already click the button {{ total }} times
    </custom-message>
  </div>
</template>

<script>
import CustomMessage from '~/components/CustomMessage.vue'

export default {
  name: 'IncrementMessage',
  components: {
    CustomMessage
  },
  props: {
    total: {
      type: Number,
      required: true
    }
  }
}
</script>
