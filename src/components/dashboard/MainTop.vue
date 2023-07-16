<script setup>
const region = "us-east-1";
</script>

<template>
  <v-sheet class="text-center" :elevation="1" max-width="10%" height="10%" rounded>
    <div class="region-box">{{ region }}</div>
  </v-sheet>
</template>

<style>
.region-box {
  color: black;
  font-weight: bold;
  margin-right: auto;
  width: 5rem;
  height: 1.5rem;
}
</style>
