<script setup>
const region = "us-east-1"
</script>

<style>
.top{margin:10px 0px 5px 5px;}
</style>

<template>
    <v-sheet class="top text-center" elevation="3" max-width="10%" rounded>
      <div class="text-body-2 text-black font-weight-bold">{{ region }}</div>
    </v-sheet>
</template>
