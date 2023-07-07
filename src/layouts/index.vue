<template>
  <AppBar />
  <LeftDrawer />
  <v-navigation-drawer v-model="drawer" location="right" width="500" temporary>
    <DrawerInput :selectedNode="selectedNode" />
  </v-navigation-drawer>
  <AppMain />
</template>

<script setup>
import AppBar from "../layouts/components/AppBar";
import LeftDrawer from "../layouts/components/LeftDrawer";
import DrawerInput from "../components/aws/DrawerInput.vue";
import AppMain from "../layouts/components/AppMain";
</script>
