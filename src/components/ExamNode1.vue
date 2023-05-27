<script setup>
import ModalExample from './ModalExample.vue';
import { useNode } from '@vue-flow/core';

const props = defineProps({
  asdf: Object,
})

const { node } = useNode()

const onSave = (inputFromModal) => {
  console.log(`Input From Modal: ${inputFromModal}`)

  node.data.foo = inputFromModal
}
</script>

<template>
  <!-- <v-sheet width="200" class="mx-auto">

  <v-form ref="form">
    <v-text-field
      v-model="inputExample"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <div class="d-flex flex-column">
      <v-btn
        color="success"
        class="mt-4"
        @click="alertExample"
      >
        OK
      </v-btn>

    </div>
  </v-form>
  </v-sheet> -->
  <div class="d-flex align-center flex-column">

    <div class="mt-4 text-subtitle-2">With slots</div>

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
