<script setup>
import { ref } from 'vue';
import { onUpdated } from 'vue';
import store from '@/store';
const props = defineProps({
    selectedNode: Object,
});
let instance_items = [];
store.dispatch('aws/getInstanceTypes').then((res) => {
    const instance_type = store.state.aws.instance_types;
    for (let value of instance_type) {
        instance_items.push(value.InstanceType);
    }
    instance_items.sort();
});
store.dispatch('aws/getAMI');

const nodeType = ref('');
onUpdated(() => {
    nodeType.value = props.selectedNode.type;
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
                    v-model="selectedNode.data.min_size"
                    color="primary"
                    label="Min Size"
                    variant="underlined"
                />
                <v-text-field
                    v-model="selectedNode.data.max_size"
                    color="primary"
                    label="Max Size"
                    variant="underlined"
                />
                <v-text-field
                    v-model="selectedNode.data.desired_capacity"
                    color="primary"
                    label="Desired Capacity"
                    variant="underlined"
                ></v-text-field>
                <v-combobox
                    v-model="selectedNode.data.image_id"
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
                    v-model="selectedNode.data.instance_type"
                    :items="instance_items"
                    color="primary"
                    label="Instance Type"
                    variant="underlined"
                />
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
                    v-model="selectedNode.data.instance_type"
                    :items="instance_items"
                    color="primary"
                    label="Instance Type"
                    variant="underlined"
                />
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
            </v-container>
        </v-card>
    </div>
    <div v-else-if="nodeType == 'privatesubnet'">
        <v-card class="mx-auto">
            <v-container>
                <v-row class="drawer-header" align="center">
                    <div class="drawer-header-title">Private Subnet</div>
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
                    v-model="selectedNode.data.name"
                    color="primary"
                    label="Name"
                    variant="underlined"
                ></v-text-field>
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
                    v-model="selectedNode.data.name"
                    color="primary"
                    label="Name"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="selectedNode.data.cidr"
                    color="primary"
                    label="CIDR"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="selectedNode.data.public_subnet"
                    color="primary"
                    label="Public Subnet"
                    variant="underlined"
                ></v-text-field>
                <v-text-field
                    v-model="selectedNode.data.private_subnet"
                    color="primary"
                    label="Private Subnet"
                    variant="underlined"
                ></v-text-field>
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
</style>
