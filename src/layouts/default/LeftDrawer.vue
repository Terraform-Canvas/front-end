<script setup>
function onDragStart(event, nodeType) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}
</script>

<template>
  <v-navigation-drawer
      width="244"
    >
    <div class="nodes">
      <div class="vue-flow__node-default" :draggable="true"
      @dragstart="onDragStart($event, 'exam1')">Exam Node</div>
      <div class="vue-flow__node-default" :draggable="true"
      @dragstart="onDragStart($event, 'default')">Default Node</div>
      <div class="vue-flow__node-output" :draggable="true"
      @dragstart="onDragStart($event, 'output')">Output Node</div>
    </div>
    </v-navigation-drawer>
</template>
