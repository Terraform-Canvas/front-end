<script setup>
import AppBar from './layouts/default/AppBar.vue'
import LeftDrawer from './layouts/default/LeftDrawer.vue'

import NodePlane from './components/NodePlane.vue'

import { ref } from 'vue';

const drawer = ref(false)
const selectedInfoId = ref('')

const handleRightDrawer = (selectedNodes) => {
  console.log(selectedNodes.value[0].id)

  drawer.value = !drawer.value
  selectedInfoId.value = selectedNodes.value[0].id
}
</script>

<template>
  <v-app id="app">
    <AppBar />
    <LeftDrawer />
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list
          :items="selectedInfoId"
        ></v-list>
      </v-navigation-drawer>
    <v-main>
      <NodePlane @nodeClicked="handleRightDrawer"/>
    </v-main>
  </v-app>
</template>
