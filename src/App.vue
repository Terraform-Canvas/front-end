<script setup>
import AppBar from './layouts/default/AppBar.vue'
import LeftDrawer from './layouts/default/LeftDrawer.vue'

import NodePlane from './components/NodePlane.vue'
</script>

<template>
  <v-app id="app">
    <AppBar />
    <LeftDrawer />
    <v-main>
      <NodePlane />
    </v-main>
  </v-app>
</template>
