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
    instance_items = store.getters['aws/getInstanceValue'];
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
                    <v-img src="@/assets/resources/aws/ASG.svg" />
                </div>
                <div class="drawer-header-title">Auto Scailing Group</div>
            </v-row>
            <v-text-field
                :model-value="tempNodeData.min_size"
                @input="handleUpdate($event, 'min_size', 'int')"
                color="primary"
                label="Min Size"
                variant="underlined"
            />
            <v-text-field
                :model-value="tempNodeData.max_size"
                @input="handleUpdate($event, 'max_size', 'int')"
                color="primary"
                label="Max Size"
                variant="underlined"
            />
            <v-text-field
                :model-value="tempNodeData.desired_capacity"
                @input="handleUpdate($event, 'desired_capacity', 'int')"
                color="primary"
                label="Desired Capacity"
                variant="underlined"
            ></v-text-field>
            <v-combobox
                v-model="tempNodeData.image_id"
                :items="store.state.aws.ami"
                item-title="ImageId"
                item-value="ImageId"
                color="primary"
                label="Image Id"
                variant="underlined"
                chips
                closable-chips
            >
                <template v-slot:chip="{ props, item }">
                    <v-chip v-bind="props" :text="item.raw.Name"></v-chip>
                </template>
                <template v-slot:item="{ props, item }">
                    <v-list-item
                        v-bind="props"
                        :title="item?.raw?.Name"
                        :subtitle="item?.raw?.ImageId"
                    />
                </template>
            </v-combobox>
            <v-combobox
                v-model="tempNodeData.instance_type"
                :items="instance_items"
                color="primary"
                label="Instance Type"
                variant="underlined"
            />
            <v-textarea
                clearable
                variant="underlined"
                clear-icon="mdi-close-circle"
                label="user-data"
                :model-value="tempNodeData.user_data"
                @input="handleUpdate($event, 'user_data')"
            >
            </v-textarea>

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
