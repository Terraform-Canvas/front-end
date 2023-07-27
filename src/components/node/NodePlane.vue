<script setup>
import ExamNode1 from './ExamNode1.vue';
import ParentNode from './ParentNode.vue';

import ALB from '@/components/aws/ALB.vue';
import EC2 from '@/components/aws/EC2.vue';
import NATGateway from '@/components/aws/NATGateway.vue';
import PrivateSubnet from '@/components/aws/PrivateSubnet.vue';
import PublicSubnet from '@/components/aws/PublicSubnet.vue';
import SecurityGroup from '@/components/aws/SecurityGroup.vue';
import Vpc from '@/components/aws/Vpc.vue';
import AutoScalingGroup from '@/components/aws/AutoScalingGroup.vue';

import { VueFlow, useVueFlow, PanelPosition } from '@vue-flow/core';
import { nextTick, watch } from 'vue';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';
import ChildNode from './ChildNode.vue';
import { ref } from 'vue';
import MainTopVue from '../dashboard/MainTop.vue';

import axios from '@/plugins/axios';
let id = 0;
function getId() {
    return `${id++}`;
}

const emit = defineEmits(['nodeClicked']);
const nodeClicked = () => {
    emit('nodeClicked', getSelectedNodes);
};

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

onNodeClick((MouseEvent) => {
    nodeClicked();
    getSelectedNodes.value.forEach((v) =>
        console.log(`Selected: ${v.id}, type: ${v.type}`),
    );
});

function onDragOver(event) {
    event.preventDefault();

    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
    }
}

onConnect((params) => addEdges(params));

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
let bntLoader = ref(false);
let btnType = ref('');
let btnMsg = ref('');
const exportAndOpenModal = () => {
    let exportDataArr = [];
    bntLoader.value = true;
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
    showModal.value = true;
    if (btnData.value === 'create') {
        axios
            .post('/terraform/usertf', exportData.value)
            .then((res) => {
                btnData.value = 'run';
                btnType.value = 'success';
                btnMsg.value = 'tf 생성 완료';
                bntLoader.value = false;
            })
            .catch((err) => {
                btnMsg.value = 'tf 생성 실패';
                btnType.value = 'warning';
                bntLoader.value = false;
                console.error(err);
            });
    } else if (btnData.value === 'run') {
        axios
            .post('/terraform/apply', exportData.value)
            .then((res) => {
                btnData.value = 'create';
                btnMsg.value = 'tf 실행 완료';
                btnType.value = 'success';
                bntLoader.value = false;
            })
            .catch((err) => {
                btnMsg.value = 'tf 실행 실패';
                btnType.value = 'warning';
                bntLoader.value = false;
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
            :loading="bntLoader"
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
