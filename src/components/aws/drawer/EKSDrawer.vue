<script setup>
import { onMounted, defineEmits, defineProps, reactive } from 'vue';

let tempNodeData = reactive({});
let args = ['control', 'managed', 'fargate'];
let cluster_versions = ['1.23', '1.24', '1.25', '1.26', '1.27'];

const eks_type_toggles = reactive({
    control: true,
    managed: false,
    fargate: false,
});

const emit = defineEmits(['saveForm', 'closeForm']);
const props = defineProps(['currentNodeData']);

const handleSave = () => {
    for (let arg of args) {
        if (!eks_type_toggles[arg]) {
            tempNodeData[arg] = {};
        }
    }
    if (tempNodeData) {
        emit('saveForm', tempNodeData);
    }
};

const handleClose = () => {
    tempNodeData = reactive({});
    emit('closeForm');
};

onMounted(() => {
    tempNodeData = reactive(JSON.parse(JSON.stringify(props.currentNodeData)));
    for (let arg of args) {
        if (!eks_type_toggles[arg]) {
            tempNodeData[arg] = {};
        }
    }
    for (let arg of args) {
        if (tempNodeData[arg] && Object.keys(tempNodeData[arg]).length) {
            eks_type_toggles[arg] = true;
        }
    }
});

const handleUpdate = (newTextValue, arg1, arg2, type) => {
    if (!tempNodeData[arg1]) {
        tempNodeData[arg1] = {};
    }
    if (type == 'str' || !type) {
        tempNodeData[arg1][arg2] = newTextValue.target.value;
    } else if (type == 'bool') {
        tempNodeData[arg1][arg2] = newTextValue.target.checked;
    } else if (type == 'int') {
        tempNodeData[arg1][arg2] = Number(newTextValue.target.value);
    } else if (type == 'list') {
        tempNodeData[arg1][arg2] = [newTextValue.target.value];
    }
};

const handleComboboxUpdate = (newTextValue, arg1, arg2) => {
    tempNodeData[arg1][arg2] = newTextValue;
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
                    <v-img src="@/assets/resources/aws/EKS.svg" />
                </div>
                <div class="drawer-header-title">
                    Elastic Kubernetes Service
                </div>
            </v-row>
            <v-text-field
                :model-value="tempNodeData?.control?.name"
                @input="handleUpdate($event, 'control', 'name')"
                color="primary"
                label="Name"
                variant="underlined"
            ></v-text-field>
            <v-combobox
                :model-value="tempNodeData?.control?.cluster_version"
                @update:model-value="
                    handleComboboxUpdate($event, 'control', 'cluster_version')
                "
                :items="cluster_versions"
                color="primary"
                label="Cluster Version"
                variant="underlined"
            />
            <v-text-field
                :model-value="tempNodeData?.control?.userarn"
                @input="handleUpdate($event, 'control', 'userarn')"
                color="primary"
                label="User ARN"
                variant="underlined"
            ></v-text-field>
            <v-text-field
                :model-value="tempNodeData?.control?.username"
                @input="handleUpdate($event, 'control', 'username')"
                color="primary"
                label="User Name"
                variant="underlined"
            ></v-text-field>
            <v-switch
                :model-value="tempNodeData?.control?.endpoint_public"
                @input="
                    handleUpdate($event, 'control', 'endpoint_public', 'bool')
                "
                color="primary"
                label="endpoint_public"
            />
            <v-switch
                :model-value="tempNodeData?.control?.endpoint_private"
                @input="
                    handleUpdate($event, 'control', 'endpoint_private', 'bool')
                "
                color="primary"
                label="endpoint_private"
            />
            <v-switch
                label="EKS managed"
                color="primary"
                v-model="eks_type_toggles['managed']"
                inset
            >
            </v-switch>
            <div v-if="eks_type_toggles['managed']">
                <v-text-field
                    :model-value="tempNodeData?.managed?.min_size"
                    @input="handleUpdate($event, 'managed', 'min_size', 'int')"
                    color="primary"
                    label="Min size"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.managed?.max_size"
                    @input="handleUpdate($event, 'managed', 'max_size', 'int')"
                    color="primary"
                    label="Max size"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.managed?.desired_size"
                    @input="
                        handleUpdate($event, 'managed', 'desired_size', 'int')
                    "
                    color="primary"
                    label="Desired size"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.managed?.disk_size"
                    @input="handleUpdate($event, 'managed', 'disk_size', 'int')"
                    color="primary"
                    label="Disk size"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.managed?.instance_types"
                    @input="
                        handleUpdate(
                            $event,
                            'managed',
                            'instance_types',
                            'list',
                        )
                    "
                    color="primary"
                    label="Instance types"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.managed?.capacity_type"
                    @input="handleUpdate($event, 'managed', 'capacity_type')"
                    color="primary"
                    label="Capacity type"
                    variant="underlined"
                ></v-text-field>
            </div>
            <v-switch
                label="Fargate"
                color="primary"
                v-model="eks_type_toggles['fargate']"
                inset
            >
            </v-switch>
            <div v-if="eks_type_toggles['fargate']">
                <v-text-field
                    :model-value="tempNodeData?.fargate?.name"
                    @input="handleUpdate($event, 'fargate', 'name')"
                    color="primary"
                    label="Name"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    :model-value="tempNodeData?.fargate?.namespaces"
                    @input="
                        handleUpdate($event, 'fargate', 'namespaces', 'list')
                    "
                    color="primary"
                    label="Namespaces"
                    variant="underlined"
                ></v-text-field>
            </div>

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
