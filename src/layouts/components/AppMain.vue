<template>
  <Transition name="fade-transform" mode="out-in">
    <router-view />
  </Transition>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
