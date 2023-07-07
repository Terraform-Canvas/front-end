<template>
    <v-main>
      <v-container fluid class="container-size">
        <v-row>
          <v-col><MainTop /></v-col>
        </v-row>
        <v-row class="row-vueflow">
          <v-col><NodePlane @nodeClicked="handleRightDrawer"/></v-col>
        </v-row>
        <v-row>
          <v-col><MainBottom /></v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script setup>
import MainTop from '../../components/dashboard/MainTop';
import NodePlane from '../../components/node/NodePlane';
import MainBottom from '../../components/dashboard/MainBottom';
import { ref, onUpdated } from 'vue';

const drawer = ref(false)
const selectedNode = ref(Object)
// v-navigation-drawer는 VueFlow 하위 컴포넌트가 아니라 Node를 찾을 수 없어 Object 통째로 넘겨줘야 함


const handleRightDrawer = (selectedNodes) => {
  console.log("rightdrawer click")

  drawer.value = !drawer.value
  selectedNode.value = selectedNodes.value[0]
}
</script>
  
<style lang="scss" scoped>
@import '@/styles/main.css';
</style>