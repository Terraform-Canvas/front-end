<script setup>
import ResourceNodeCommon from "./ResourceNodeCommon.vue";

import { useVueFlow, useNode } from "@vue-flow/core";

const { getIntersectingNodes, findNode, onNodeDragStop } = useVueFlow();
const { node } = useNode();

onNodeDragStop((nodeDragEvent) => {
    if (nodeDragEvent.node?.id == node.id) {
        const intersectingNodes = getIntersectingNodes(node);
        const filteredNodes = intersectingNodes
            .filter((e) => findNode(e.id).type == "vpc")
            .map((e) => e);

        const parentId = filteredNodes[filteredNodes.length - 1]?.id;

        if (parentId && findNode(parentId).parentNode != node.id) {
            node.parentNode = parentId;
            node.expandParent = true;
        }
    }
});
</script>

<template>
    <div class="node-wrapper">
        <div class="node-header">
            <div class="node-title">Auto Scailing Group</div>
            <ResourceNodeCommon />
        </div>
    </div>
</template>

<style>
.node-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
}

.node-header {
    display: flex;
    align-items: center;
}

.node-title {
    width: 30px;
    height: 30px;
    font-weight: bold;
}

.node-detail-container {
    display: flex;
    padding-top: 10px;
}
.node-logo {
    width: 30px;
    height: 30px;
}

.node-detail {
    width: 30px;
    height: 30px;
    color: gray;
    padding-left: 30px;
}
</style>
