<script setup>
import ExamNode1 from './components/ExamNode1.vue';
import AppBar from './layouts/default/AppBar.vue'
import LeftDrawer from './layouts/default/LeftDrawer.vue'

import { VueFlow, useVueFlow } from '@vue-flow/core'
import { nextTick, watch, ref } from 'vue'

let id = 0
function getId() {
  return `dndnode_${id++}`
}

const { findNode, onConnect, addEdges, addNodes, project, vueFlowRef } = useVueFlow({
  nodes: [],
})

function onDragOver(event) {
  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}

onConnect((params) => addEdges(params))

function onDrop(event) {
  const type = event.dataTransfer?.getData('application/vueflow')
  console.log(type)
  const { left, top } = vueFlowRef.value.getBoundingClientRect()

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  })

  const newNode = {
    id: getId(),
    type,
    position,
    label: `${type} node`,
    data: {
      "foo": "bar"
    },
  }

  addNodes([newNode])

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node = findNode(newNode.id)
    const stop = watch(
      () => node.dimensions,
      (dimensions) => {
        if (dimensions.width > 0 && dimensions.height > 0) {
          node.position = { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 }
          stop()
        }
      },
      { deep: true, flush: 'post' },
    )
  })
}
</script>

<style>
@import './styles/main.css';
</style>

<template>
  <v-app id="inspire">
    <VueFlow
        @dragover="onDragOver"
        @drop="onDrop"
        class="customnodeflow">
        <template #node-exam1>
          <ExamNode1 />
        </template>
    <AppBar />
    <LeftDrawer />
    <v-main>

    </v-main>
  </VueFlow>
  </v-app>
</template>
