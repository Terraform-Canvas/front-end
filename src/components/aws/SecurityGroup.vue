<script setup>
import ResourceNodeCommon from "./ResourceNodeCommon.vue";

import { useVueFlow, useNode } from "@vue-flow/core";

const { getIntersectingNodes, findNode, onNodeDragStop } = useVueFlow();
const { node } = useNode();

onNodeDragStop((nodeDragEvent) => {
  if (nodeDragEvent.node?.id == node.id) {
    const intersectingNodes = getIntersectingNodes(node);
    const filteredNodes = intersectingNodes
      .filter((e) => {
        const nodeType = findNode(e.id).type;
        return nodeType == "asg" || nodeType == "vpc";
      })
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
  <div>
    SecurityGroup
    <ResourceNodeCommon />
  </div>
</template>
