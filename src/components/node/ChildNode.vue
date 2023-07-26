<script setup>
import { useNode, useVueFlow } from "@vue-flow/core";

const { node } = useNode();

const { removeNodes, getIntersectingNodes, onNodeDragStop, findNode } =
    useVueFlow();

onNodeDragStop((nodeDragEvent) => {
    if (nodeDragEvent.node.id == node.id) {
        console.log(nodeDragEvent);

        const parentId = getIntersectingNodes(node)[0]?.id;
        console.log(parentId);

        if (parentId && findNode(parentId).parentNode != node.id) {
            node.parentNode = parentId;
            node.expandParent = true;
        }
    }
});

const onRemove = () => {
    removeNodes([node.id]);
};
</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-btn icon="mdi-delete-outline" size="small" @click="onRemove" />
        <div style="padding: 10px">{{ node.id }}</div>
    </div>
</template>
