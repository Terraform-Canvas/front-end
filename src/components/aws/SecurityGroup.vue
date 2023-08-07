<script setup>
import ResourceNodeCommon from './ResourceNodeCommon.vue';

import { useVueFlow, useNode } from '@vue-flow/core';

const { getIntersectingNodes, findNode, onNodeDragStop, updateNodeInternals } =
    useVueFlow();
const { node } = useNode();

onNodeDragStop((nodeDragEvent) => {
    if (nodeDragEvent.node?.id == node.id) {
        const intersectingNodes = getIntersectingNodes(node);
        const filteredNodes = intersectingNodes
            .filter((e) => {
                const nodeType = findNode(e.id).type;
                return nodeType == 'asg' || nodeType == 'vpc';
            })
            .map((e) => e);

        const parentId = filteredNodes[filteredNodes.length - 1]?.id;
        const parentNode = findNode(parentId);

        if (parentId && parentNode.parentNode != node.id) {
            //노드에 새로운 부모 노드가 생겼을 때 좌표 값이 부모 노드 기준으로 바뀌는 현상 보정
            if (!node.parentNode) {
                node.position = {
                    x: node.position.x - parentNode.position.x,
                    y: node.position.y - parentNode.position.y,
                };
            }
            node.parentNode = parentId;
            node.expandParent = true;
            updateNodeInternals([node.id]);
        }
    }
});
</script>

<template>
    <div class="node-wrapper">
        <div class="node-header">
            <div class="node-title">Security Group</div>
            <ResourceNodeCommon />
        </div>
    </div>
</template>

<style scoped>
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
