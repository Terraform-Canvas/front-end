<script setup>
import {
    ref,
    reactive,
    onBeforeUpdate,
    defineEmits,
    defineProps,
    watch,
} from 'vue';
import store from '@/store';
import EC2Drawer from '@/components/aws/drawer/EC2Drawer.vue';
import ALBDrawer from '@/components/aws/drawer/ALBDrawer.vue';
import ASGDrawer from '@/components/aws/drawer/ASGDrawer.vue';
import EKSDrawer from '@/components/aws/drawer/EKSDrawer.vue';
import NATgwDrawer from '@/components/aws/drawer/NATgwDrawer.vue';
import PrivateSubnetDrawer from '@/components/aws/drawer/PrivateSubnetDrawer.vue';
import PublicSubnetDrawer from '@/components/aws/drawer/PublicSubnetDrawer.vue';
import SGDrawer from '@/components/aws/drawer/SGDrawer.vue';
import VPCDrawer from '@/components/aws/drawer/VPCDrawer.vue';

let instance_items = [];
let currentNodeData = reactive({});
const nodeType = ref('');
const props = defineProps(['drawer']);

store.dispatch('aws/getInstanceTypes').then((res) => {
    const instance_type = store.state.aws.instance_types;
    for (let value of instance_type) {
        instance_items.push(value.InstanceType);
    }
    instance_items.sort();
});

const emit = defineEmits(['handleRightDrawer']);

const closeForm = () => {
    currentNodeData = reactive({});
    emit('handleRightDrawer');
};

const saveForm = (nodeData) => {
    store.dispatch('node/updateSelectedNodeData', nodeData);
    closeForm();
};

watch(
    () => props.drawer, // For init input form
    (newValue, oldValue) => {
        if (!newValue) {
            currentNodeData = reactive({});
            nodeType.value = null;
        }
    },
);

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
    <!--Trick Component for rerendering -->
    <div v-if="!nodeType"></div>
    <div v-else-if="nodeType == 'eks'">
        <EKSDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'alb'">
        <ALBDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'asg'">
        <ASGDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'ec2'">
        <EC2Drawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'natgw'">
        <NATgwDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'privatesubnet'">
        <PrivateSubnetDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'publicsubnet'">
        <PublicSubnetDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'sg'">
        <SGDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
    <div v-else-if="nodeType == 'vpc'">
        <VPCDrawer
            :currentNodeData="currentNodeData"
            @saveForm="saveForm"
            @closeForm="closeForm"
        />
    </div>
</template>

<style>
.drawer-header {
    padding-bottom: 3rem;
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

.cancel-btn {
    margin-left: auto;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    background-color: #fa5252;
    color: white;
    font-weight: bold;
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
