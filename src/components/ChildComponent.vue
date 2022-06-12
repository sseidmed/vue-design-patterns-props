<template>
  <div class="container">
    <h3>Child</h3>
    <p>{{ props.message }}</p>
    <hr />
  </div>
</template>

<script setup>
import { ref } from "vue";



const props = defineProps({
  message: {
    type: String,
    required: false,
    default: "I am the default message",
    validator: validateMessage
  },
});


</script>

<script>

const validateMessage = (message) => {
    if (!['I am the default message', 'Clean your room', 'Take out the trash', 'Find the remote'].includes(message)) {
        throw Error(`Message not identified. You provided: ${message}.`)
    }
}
export default {}
</script>


<style scoped>
.container {
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
  width: 50%;
}
</style>