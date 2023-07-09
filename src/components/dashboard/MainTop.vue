<script setup>
const region = "us-east-1";
</script>

<style>
.top {
  margin: 10px 0px 5px 5px;
}
</style>

<template>
  <v-sheet class="top text-center" max-width="10%" rounded>
    <div class="region-box">{{ region }}</div>
  </v-sheet>
</template>

<style>
.region-box {
  background-color: black;
  color: white;
  font-weight: bold;
  margin-right: auto;
  width: 5rem;
  height: 2rem;
}
</style>
