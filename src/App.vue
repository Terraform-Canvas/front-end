<script setup>
import AppBar from "./layouts/default/AppBar.vue";
import LeftDrawer from "./layouts/default/LeftDrawer.vue";
import MainBottom from "./components/MainBottom.vue";
import NodePlane from "./components/NodePlane.vue";

import { ref } from "vue";
import DrawerInput from "./components/aws/DrawerInput.vue";

const drawer = ref(false);
const selectedNode = ref(Object);
// v-navigation-drawer는 VueFlow 하위 컴포넌트가 아니라 Node를 찾을 수 없어 Object 통째로 넘겨줘야 함

const handleRightDrawer = (selectedNodes) => {
  console.log(selectedNodes.value[0].id);

  drawer.value = !drawer.value;
  selectedNode.value = selectedNodes.value[0];
};
</script>

<template>
  <v-app id="app">
    <AppBar />

    <LeftDrawer />
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      width="500"
      temporary
    >
      <DrawerInput :selectedNode="selectedNode" />
    </v-navigation-drawer>
    <v-main class="pl-20 pr-10">
      <v-container fluid class="container-size">
        <v-row class="row-vueflow">
          <v-col><NodePlane @nodeClicked="handleRightDrawer" /></v-col>
        </v-row>
        <v-row>
          <v-col><MainBottom /></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@import "./styles/main.css";
</style>
