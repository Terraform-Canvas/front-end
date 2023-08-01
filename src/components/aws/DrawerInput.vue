<script setup>
import { ref } from 'vue';
import { reactive, onBeforeUpdate, defineEmits } from 'vue';
import store from '@/store';

let instance_items = [];
let currentNodeData = reactive({});
const nodeType = ref('');

store.dispatch('aws/getInstanceTypes').then((res) => {
    const instance_type = store.state.aws.instance_types;
    for (let value of instance_type) {
        instance_items.push(value.InstanceType);
    }
    instance_items.sort();
});
store.dispatch('aws/getAMI');

const emit = defineEmits(['handleRightDrawer']);

const saveForm = () => {
    store.dispatch('node/updateSelectedNodeData', currentNodeData);
    currentNodeData = reactive({});
    emit('handleRightDrawer');
};

onBeforeUpdate(() => {
    if (store.getters['node/getSelectedNode']) {
        currentNodeData = reactive({
            ...store.getters['node/getSelectedNode'].data,
        });
        nodeType.value = store.getters['node/getSelectedNode'].type;
    }
});
</script>

<template>
    <div v-if="nodeType == 'alb'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-logo">
                        <v-img src="@/assets/resources/aws/alb.png" />
                    </div>
                    <div class="drawer-header-title">AWS Load Balancer</div>
                </v-row>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'asg'">
        <v-card class="mx-auto">
            <v-container>
                <div class="drawer-header-logo">
                    <v-img src="@/assets/resources/aws/asg.png" />
                </div>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">Auto Scailing Group</div>
                </v-row>
                <v-text-field
                    v-model="currentNodeData.min_size"
                    color="primary"
                    label="Min Size"
                    variant="underlined"
                />
                <v-text-field
                    v-model="currentNodeData.max_size"
                    color="primary"
                    label="Max Size"
                    variant="underlined"
                />
                <v-text-field
                    v-model="currentNodeData.desired_capacity"
                    color="primary"
                    label="Desired Capacity"
                    variant="underlined"
                ></v-text-field>
                <v-combobox
                    v-model="currentNodeData.image_id"
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
                    v-model="currentNodeData.instance_type"
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
                    v-model="currentNodeData.user_data"
                >
                </v-textarea>

                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'ec2'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-logo">
                        <v-img src="@/assets/resources/aws/ec2.png" />
                    </div>
                    <div class="drawer-header-title">EC2</div>
                </v-row>
                <v-combobox
                    v-model="currentNodeData.instance_type"
                    :items="instance_items"
                    color="primary"
                    label="Instance Type"
                    variant="underlined"
                />
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'natgw'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-logo">
                        <v-img src="@/assets/resources/aws/alb.png" />
                    </div>
                    <div class="drawer-header-title">Nat Gateway</div>
                </v-row>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'privatesubnet'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">Private Subnet</div>
                </v-row>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'publicsubnet'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">Public Subnet</div>
                </v-row>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'sg'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">Security Group</div>
                </v-row>
                <v-text-field
                    v-model="currentNodeData.name"
                    color="primary"
                    label="Name"
                    variant="underlined"
                ></v-text-field>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'vpc'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">VPC</div>
                </v-row>
                <v-text-field
                    v-model="currentNodeData.name"
                    color="primary"
                    label="Name"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="currentNodeData.cidr"
                    color="primary"
                    label="CIDR"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="currentNodeData.public_subnet"
                    color="primary"
                    label="Public Subnet"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="currentNodeData.private_subnet"
                    color="primary"
                    label="Private Subnet"
                    variant="underlined"
                ></v-text-field>
                <v-row>
                    <v-col class="text-right">
                        <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<style>
.drawer-header {
    padding-bottom: 3rem;
    padding-top: 2rem;
}

.drawer-header-title {
    font-weight: bold;
    padding-left: 1rem;
    font-size: 1.5rem;
}

.drawer-header-logo {
    width: 4rem;
    height: 4rem;
}

.save-btn {
    margin-left: auto;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    background-color: #404ae7;
    color: white;
    font-weight: bold;
}
</style>
