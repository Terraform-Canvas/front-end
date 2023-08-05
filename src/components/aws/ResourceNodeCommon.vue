<!--
Resource Node들에 공통으로 들어가는 로직과 컴포넌트
-->

<script setup>
import { NodeResizer } from '@vue-flow/node-resizer';
import { useNode, useVueFlow } from '@vue-flow/core';

const { node } = useNode();

const { removeNodes, getIntersectingNodes, onNodeDragStop, findNode } =
    useVueFlow();

/**
 * 삭제 버튼 클릭 핸들러
 * TODO: 노드들 중 해당 노드를 parent로 갖는 노드들의 parentId를 지워줘야 함.
 */
const onRemove = () => {
    removeNodes([node.id]);
};

/*
 * Node의 마우스 드래그 이벤트가 끝났을 때의 콜백.
 * Intersect중인 노드 중에 0번째를 parent로 지정한다.
 * 이때 parent 노드를 드래그했다면 parent-child-parent-child의 Recursive Call이 일어나므로
 * 자신의 child를 parent로 지정하는 것을 방지한다.
 *
 * 추후 세부 노드 컴포넌트로 옮겨 커스터마이징이 필요할 수 있다. (높은 가능성)
 */
// onNodeDragStop((nodeDragEvent) => {
//   if (nodeDragEvent.node?.id == node.id) {
//     // console.log(nodeDragEvent)

//     // TODO: 배열의 0번째로 하는 것은, 노드 생성 순서에 따라 영향을 받으므로 다른 방법을 찾아야 함.
//     //       각 리소스마다 getIntersectingNodes중 parent로 올 수 있는 리소스중에 골라야 할 듯.
//     const intersectingNodes = getIntersectingNodes(node)
//     const parentId = intersectingNodes[intersectingNodes.length-1]?.id
//     // console.log(parentId)

//     const findParentNode = findNode(parentId)

//     if (
//       (node.type == 'asg' && findParentNode?.type == 'vpc') ||
//       (node.type == 'sg' && findParentNode?.type == 'asg') ||
//       (node.type == 'publicsubnet' && findParentNode?.type == 'sg') ||
//       (node.type == 'publicsubnet' && findParentNode?.type == 'vpc') ||
//       (node.type == 'privatesubnet' && findParentNode?.type == 'sg') ||
//       (node.type == 'privatesubnet' && findParentNode?.type == 'vpc') ||
//       (node.type == 'ec2' && findParentNode?.type == 'privatesubnet') ||
//       (node.type == 'ec2' && findParentNode?.type == 'publicsubnet') ||
//       (node.type == 'natgw' && findParentNode?.type == 'publicsubnet') ||
//       (node.type == 'alb' && findParentNode?.type == 'vpc')
//     ) {
//       if (parentId && findParentNode.parentNode != node.id) {
//         node.parentNode = parentId
//         node.expandParent = true
//       }
//     }

//   }
// })
</script>
<template>
    <div style="padding: 10px">
        <v-btn
            elevation="0"
            icon="mdi-delete"
            size="small"
            @click="onRemove"
            variant="plain"
        />
    </div>
    <NodeResizer min-width="100" min-height="30" />
</template>

<style>
.vue-flow__resize-control.line {
    opacity: 0;
}
.vue-flow__resize-control.handle {
    opacity: 50%;
    background-color: #252f3e !important;
    height: 5px !important;
    width: 5px !important;
}
</style>
