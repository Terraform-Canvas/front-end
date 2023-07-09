<script setup>
// onMounted(()=>{
//   let token = store.getters.getToken
//   if (token.access == null && token.refresh == null) {
//     router.push({name: 'Login'}).catch((err)=>{console.log(err)});
//   }
// })
</script>

<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style>
@import "@/styles/main.css";
</style>
