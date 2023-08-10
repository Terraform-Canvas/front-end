<script setup>
import { onMounted, defineEmits, defineProps } from 'vue';

let tempNodeData = {};

const emit = defineEmits(['saveForm', 'closeForm']);
const props = defineProps(['currentNodeData']);

const handleSave = () => {
    if (tempNodeData) {
        emit('saveForm', tempNodeData);
    }
};

const handleClose = () => {
    emit('closeForm');
};

onMounted(() => {
    tempNodeData = { ...props.currentNodeData };
});

const handleUpdate = (newTextValue, arg) => {
    tempNodeData[arg] = newTextValue.target.value;
};
</script>
<template>
    <v-card class="mx-auto">
        <v-container>
            <v-row class="text-right">
                <v-col>
                    <v-icon class="close-btn" @click="handleClose"
                        >mdi-close</v-icon
                    >
                </v-col>
            </v-row>
            <v-row class="drawer-header" align="center">
                <div class="drawer-header-logo">
                    <v-img src="@/assets/resources/aws/ELB.svg" />
                </div>
                <div class="drawer-header-title">Elastic Load Balancer</div>
            </v-row>
        </v-container>
    </v-card>
</template>
<style></style>
