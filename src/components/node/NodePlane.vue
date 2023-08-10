<script setup>
import ExamNode1 from './ExamNode1.vue';
import ParentNode from './ParentNode.vue';

import ALB from '@/components/aws/node/ALB.vue';
import EC2 from '@/components/aws/node/EC2.vue';
import NATGateway from '@/components/aws/node/NATGateway.vue';
import PrivateSubnet from '@/components/aws/node/PrivateSubnet.vue';
import PublicSubnet from '@/components/aws/node/PublicSubnet.vue';
import SecurityGroup from '@/components/aws/node/SecurityGroup.vue';
import Vpc from '@/components/aws/node/Vpc.vue';
import AutoScalingGroup from '@/components/aws/node/AutoScalingGroup.vue';
import EKS from '@/components/aws/node/EKS.vue';

import { VueFlow, useVueFlow, PanelPosition } from '@vue-flow/core';
import { nextTick, watch, computed, onMounted } from 'vue';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';
import ChildNode from './ChildNode.vue';
import { ref } from 'vue';
import MainTopVue from '../dashboard/MainTop.vue';

import axios from '@/plugins/axios';
import store from '@/store';
let id = 0;
function getId() {
    return `${id++}`;
}

const emit = defineEmits(['nodeClicked']);
const nodeClicked = () => {
    emit('nodeClicked', getSelectedNodes);
};
const blueprintNodes = computed(() => store.getters['node/getBlueprintNodes']);
const {
    findNode,
    onConnect,
    addEdges,
    addNodes,
    project,
    vueFlowRef,
    onNodeClick,
    getSelectedNodes,
    getNodes,
} = useVueFlow({
    nodes: [],
});

onMounted(() => {
    if (!store.getters['aws/getInstanceValue']) {
        store.dispatch('aws/getInstanceTypes');
    }
    if (!store.getters['aws/getAMIValue']) {
        store.dispatch('aws/getAMI');
    }
});

onNodeClick((MouseEvent) => {
    nodeClicked();
    store.dispatch('node/setSelectedNode', getSelectedNodes.value[0]);
});

function onDragOver(event) {
    event.preventDefault();

    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
    }
}
onConnect((params) => addEdges(params));

watch(blueprintNodes, (newValue, oldValue) => {
    if (newValue) {
        let nodeData = newValue;
        addNodes(nodeData);
        id += getNodes.value.length;
    }
});

function onDrop(event) {
    const type = event.dataTransfer?.getData('application/vueflow');
    const { left, top } = vueFlowRef.value.getBoundingClientRect();

    const position = project({
        x: event.clientX - left,
        y: event.clientY - top,
    });

    const newNode = {
        id: getId(),
        type,
        position,
        label: `${type} node`,
    };
    addNodes([newNode]);

    // align node position after drop, so it's centered to the mouse
    nextTick(() => {
        const node = findNode(newNode.id);
        const stop = watch(
            () => node.dimensions,
            (dimensions) => {
                if (dimensions.width > 0 && dimensions.height > 0) {
                    node.position = {
                        x: node.position.x - node.dimensions.width / 2,
                        y: node.position.y - node.dimensions.height / 2,
                    };
                    stop();
                }
            },
            { deep: true, flush: 'post' },
        );
    });
}

const showModal = ref(false);
const exportData = ref('');
let btnData = ref('create');
let btnLoader = ref(false);
let btnType = ref('');
let btnMsg = ref('');
const exportAndOpenModal = () => {
    let exportDataArr = [];
    btnLoader.value = true;
    getNodes.value.forEach((n) => {
        let nodeData = {
            id: n.id,
            type: n.type,
            parent: n.parentNode,
            data: n.data,
        };
        exportDataArr.push(nodeData);
    });
    exportData.value = JSON.stringify(exportDataArr);

    if (btnData.value === 'create') {
        axios
            .post('/terraform/usertf', exportData.value)
            .then((res) => {
                btnData.value = 'destroy';
                btnType.value = 'success';
                btnMsg.value = 'tf 생성 완료';
                btnLoader.value = false;
                showModal.value = true;
            })
            .catch((err) => {
                btnMsg.value = 'tf 생성 실패';
                btnType.value = 'warning';
                btnLoader.value = false;
                showModal.value = true;
                console.error(err);
            });
    }
    // else if (btnData.value === 'run') {
    //     axios
    //         .post('/terraform/apply', exportData.value)
    //         .then((res) => {
    //             btnData.value = 'destroy';
    //             btnMsg.value = 'tf 실행 완료';
    //             btnType.value = 'success';
    //             btnLoader.value = false;
    //         })
    //         .catch((err) => {
    //             btnMsg.value = 'tf 실행 실패';
    //             btnType.value = 'warning';
    //             btnLoader.value = false;
    //             console.error(err);
    //         });
    // }
    else if (btnData.value === 'destroy') {
        axios
            .post('/terraform/destroy')
            .then((res) => {
                btnData.value = 'create';
                btnMsg.value = 'tf 삭제 완료';
                btnType.value = 'success';
                btnLoader.value = false;
                showModal.value = true;
            })
            .catch((err) => {
                btnMsg.value = 'tf 삭제 실패';
                btnType.value = 'warning';
                btnLoader.value = false;
                showModal.value = true;
                console.error(err);
            });
    }
};
</script>

<style>
@import '@/styles/main.css';
@import '@/styles/nodeflow.css';
</style>

<template>
    <div class="header-utils">
        <MainTopVue />
        <v-btn
            :loading="btnLoader"
            class="export-btn"
            @click="exportAndOpenModal"
            >{{ btnData }}</v-btn
        >
    </div>

    <v-container :fluid="true" class="fill-height">
        <v-row class="fill-height">
            <VueFlow
                v-model="elements"
                @dragover="onDragOver"
                @drop="onDrop"
                :class="{ dark }"
                class="customnodeflow basicflow"
            >
                <template #node-exam1>
                    <ExamNode1 />
                </template>
                <template #node-parent>
                    <ParentNode />
                </template>
                <template #node-child>
                    <ChildNode />
                </template>

                <!-- AWS Resources Below -->
                <template #node-eks>
                    <EKS />
                </template>
                <template #node-vpc>
                    <Vpc />
                </template>
                <template #node-asg>
                    <AutoScalingGroup />
                </template>
                <template #node-alb>
                    <ALB />
                </template>
                <template #node-ec2>
                    <EC2 />
                </template>
                <template #node-natgw>
                    <NATGateway />
                </template>
                <template #node-privatesubnet>
                    <PrivateSubnet />
                </template>
                <template #node-publicsubnet>
                    <PublicSubnet />
                </template>
                <template #node-sg>
                    <SecurityGroup />
                </template>
                <!-- AWS Resources Upper -->

                <Background
                    :pattern-color="'#FFFFFB'"
                    :bg-color="'#F5F5F5'"
                    gap="8"
                />
                <MiniMap />
                <Controls :position="PanelPosition.BottomLeft" />
            </VueFlow>
        </v-row>
    </v-container>
    <template>
        <v-dialog v-model="showModal" content-class="align-center">
            <v-alert
                variant="outlined"
                :type="btnType"
                prominent
                border="top"
                width="300"
            >
                {{ btnMsg }}
            </v-alert>
        </v-dialog>
    </template>
</template>

<style>
.vue-flow__controls {
    box-shadow: unset !important;
}
.header-utils {
    display: flex;
}
.export-btn {
    margin-left: auto;
    height: 2rem;
    background-color: #404ae7;
    color: white;
    font-weight: bold;
}
</style>
