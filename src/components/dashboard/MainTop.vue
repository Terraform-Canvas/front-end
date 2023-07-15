<script setup>
const region = "us-east-1";
</script>

<style>
.top {
  margin: 10px 0px 5px 5px;
}
</style>

<template>
  <v-sheet class="top text-center" :elevation="1" max-width="10%" rounded>
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
