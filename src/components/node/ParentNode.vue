<script setup>
import { NodeResizer } from '@vue-flow/node-resizer'
import { useNode, useVueFlow } from '@vue-flow/core';

const { node } = useNode()

const { removeNodes } = useVueFlow()

const onRemove = () => {
  removeNodes([node.id])
}
</script>

<template>
  <NodeResizer min-width="100" min-height="30" />
  <v-btn icon="mdi-delete-outline" size="small" @click="onRemove" />
  <div style="padding: 10px">{{ node.id }}</div>
</template>
