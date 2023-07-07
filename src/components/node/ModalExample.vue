<template>
  <div>
    <div class="d-flex">
      <v-btn color="primary" @click="openModal" width="110px">Open Modal</v-btn>
    </div>
    <v-dialog v-model="modalOpen" max-width="500px">
      <!-- <template v-slot:activator="{ on }">
        <div v-on="on"></div>
      </template> -->

      <v-card>
        <v-card-title>
          <span class="headline">Modal Title</span>
        </v-card-title>

        <v-card-text>
          <!-- 입력 받는 필드나 내용을 여기에 추가 -->
          <v-text-field v-model="inputValue" label="Input Field"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" @click="saveInput">Save</v-btn>
          <v-btn @click="closeModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["save"]);

const modalOpen = ref(false);
const inputValue = ref("");

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const saveInput = () => {
  // 입력값을 처리하는 로직을 추가
  console.log("Input Value:", inputValue.value);
  emit("save", inputValue.value);
  closeModal();
};
</script>
