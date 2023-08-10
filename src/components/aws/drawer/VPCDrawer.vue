<script setup>
import { onMounted, defineEmits, defineProps, reactive } from 'vue';

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
                <div class="drawer-header-logo">
                    <v-img src="@/assets/resources/aws/VPC.svg" />
                </div>
                <div class="drawer-header-title">VPC</div>
            </v-row>
            <v-text-field
                :model-value="tempNodeData.name"
                @input="handleUpdate($event, 'name')"
                color="primary"
                label="Name"
                variant="underlined"
            ></v-text-field>
            <v-text-field
                :model-value="tempNodeData.cidr"
                @input="handleUpdate($event, 'cidr')"
                color="primary"
                label="CIDR"
                variant="underlined"
            ></v-text-field>
            <v-text-field
                :model-value="tempNodeData.publicsubnet"
                @input="handleUpdate($event, 'publicsubnet', 'int')"
                color="primary"
                label="Public Subnet"
                variant="underlined"
            ></v-text-field>
            <v-text-field
                :model-value="tempNodeData.privatesubnet"
                @input="handleUpdate($event, 'privatesubnet', 'int')"
                color="primary"
                label="Private Subnet"
                variant="underlined"
            ></v-text-field>
            <v-select
                label="AZS"
                v-model="tempNodeData.azs"
                multiple
                :items="['us-east-1a', 'us-east-1b', 'us-east-1c']"
            >
            </v-select>
            <v-switch
                :model-value="tempNodeData.nat_gateway"
                @input="handleUpdate($event, 'nat_gateway', 'bool')"
                color="primary"
                label="nat_gateway"
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
