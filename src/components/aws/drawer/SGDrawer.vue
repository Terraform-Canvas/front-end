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

const handleUpdate = (newTextValue, arg, type) => {
    if (type == 'str' || !type) {
        tempNodeData[arg] = newTextValue.target.value;
    } else if (type == 'bool') {
        tempNodeData[arg] = newTextValue.target.checked;
    } else if (type == 'int') {
        tempNodeData[arg] = Number(newTextValue.target.value);
    }
};
</script>
<template>
    <v-card class="mx-auto">
        <v-container>
            <v-row class="text-right">
                <v-col>
                    <v-icon
                        class="close-btn"
                        v-bind="props"
                        @click="handleClose"
                        >mdi-close</v-icon
                    >
                </v-col>
            </v-row>
            <v-row class="drawer-header" align="center">
                <div class="drawer-header-title">Security Group</div>
            </v-row>
            <v-text-field
                :model-value="tempNodeData.name"
                @input="handleUpdate($event, 'name')"
                color="primary"
                label="Name"
                variant="underlined"
            ></v-text-field>
            <v-row>
                <v-col class="text-right">
                    <v-btn class="cancel-btn" @click="handleClose">Close</v-btn>
                    <v-btn class="save-btn" @click="handleSave">Save</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<style></style>
