<script setup>
import ModalExample from "./ModalExample.vue";
import { useNode, useVueFlow } from "@vue-flow/core";

const { node } = useNode();

const { removeNodes } = useVueFlow();

const onSave = (inputFromModal) => {
  console.log(`Input From Modal: ${inputFromModal}`);

  node.data.foo = inputFromModal;
};

const onRemove = () => {
  removeNodes([node.id]);
};
</script>

<template>
  <div class="d-flex align-center flex-column">
    <div class="mt-4 text-subtitle-2">With slots</div>

    <v-btn icon="mdi-delete-outline" size="small" @click="onRemove" />
    <v-card width="400">
      <template v-slot:title>
        {{ node.label }}
      </template>

      <template v-slot:subtitle>
        {{ node.id }}
      </template>

      <template v-slot:text>
        {{ node.data }}
      </template>
    </v-card>
  </div>
  <modal-example @save="onSave" />
</template>
