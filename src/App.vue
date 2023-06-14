<script setup>
import AppBar from './layouts/default/AppBar.vue'
import LeftDrawer from './layouts/default/LeftDrawer.vue'
import MainTop from './components/MainTop.vue'
import MainBottom from './components/MainBottom.vue'
import NodePlane from './components/NodePlane.vue'
</script>

<template>
  <v-app id="app">
    <AppBar />
    <LeftDrawer />
    <v-main>
      <v-container fluid class="fill-height">
        <MainTop />
        <NodePlane />
      </v-container>
    </v-main>
  </v-app>
</template>
