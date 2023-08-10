<script setup>
import { onMounted, defineEmits, defineProps, reactive } from 'vue';
import store from '@/store';
let instance_items = reactive([]);

let tempNodeData = reactive({});

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
    tempNodeData = reactive({ ...props.currentNodeData });
    store.dispatch('aws/getInstanceTypes').then((res) => {
        const instance_type = store.state.aws.instance_types;
        for (let value of instance_type) {
            instance_items.push(value.InstanceType);
        }
        instance_items.sort();
    });
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
                    <v-icon class="close-btn" @click="handleClose"
                        >mdi-close</v-icon
                    >
                </v-col>
            </v-row>
            <v-row class="drawer-header" align="center">
                <div class="drawer-header-logo">
                    <v-img src="@/assets/resources/aws/EC2.svg" />
                </div>
                <div class="drawer-header-title">EC2</div>
            </v-row>
            <v-combobox
                v-model="tempNodeData.instance_type"
                :items="instance_items"
                color="primary"
                label="Instance Type"
                variant="underlined"
            />
            <v-text-field
                :model-value="tempNodeData.key_name"
                @input="handleUpdate($event, 'key_name', 'str')"
                color="primary"
                label="Key name"
                variant="underlined"
            ></v-text-field>
            <v-switch
                :model-value="tempNodeData.monitoring"
                @input="handleUpdate($event, 'monitoring', 'bool')"
                color="primary"
                label="monitoring"
            />
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
