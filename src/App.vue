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
      <v-container fluid class="container-size">
        <v-row>
          <v-col><MainTop /></v-col>
        </v-row>
        <v-row class="row-vueflow">
          <v-col><NodePlane /></v-col>
        </v-row>
        <v-row>
          <v-col><MainBottom /></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@import './styles/main.css';
</style>