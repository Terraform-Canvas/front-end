<script setup>
import { useNode, useVueFlow,  } from '@vue-flow/core';

const { node } = useNode()

const { removeNodes, getIntersectingNodes, onNodeDragStop } = useVueFlow()

onNodeDragStop((nodeDragEvent) => {
  if (nodeDragEvent.node.id == node.id) {
    console.log(nodeDragEvent)

    const isn = getIntersectingNodes(node)
    const parentId = isn[0]?.id
    console.log(parentId)

    node.parentNode = parentId
    node.expandParent = true
  }
})

const onRemove = () => {
  removeNodes([node.id])
}

// onNodeDrag(({ intersections }) => {
//   const intersectionIds = intersections.map((intersection) => intersection.id)

//   node.parentNode = intersectionIds[0]
//   node.expandParent = true
// })
</script>

<template>
  <div class="d-flex align-center flex-column">
  <v-btn icon="mdi-delete-outline" size="small" @click="onRemove" />
  <div style="padding: 10px">{{ node.id }}</div>
</div>
</template>
