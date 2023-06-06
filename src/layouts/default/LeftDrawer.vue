<script setup>
const types = ["exam1","default","output","parent","child"];

function onDragStart(event, nodeType) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}
</script>

<template>
    <v-navigation-drawer
        theme="dark"
        rail
        permanent
      >
        <v-list
          density="compact"
          nav
        >
        <!-- add cloud platform icons -->
          <v-list-item><v-img src="@/assets/images/aws-logo.png" width="auto" height="auto"/></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer
        width="180"
      >
      <v-list class="nodes" nav v-for="(item,idx) in types" density="compact">
        <v-list-group value="aws">
          <template v-slot:activator=" { props }">
            <v-list-item
              v-bind="props"
              :title="item"
            ></v-list-item>
          </template>
          <v-list-subheader>aws {{ item }}</v-list-subheader>
          <v-list-item class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, item)">
            {{ item }} Node
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>
