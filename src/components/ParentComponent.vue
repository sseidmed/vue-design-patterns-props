<template>
  <div class="container">
    <h3>Parent</h3>

    <ChildComponent
      message="Clean your room"
    />
  </div>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

</script>

<style scoped>
.container {
  border: 1px solid black;
  padding: 10px;
}
</style>