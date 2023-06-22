<script setup>
import { ref } from 'vue';
import { onUpdated } from 'vue';

const props = defineProps({
  selectedNode: Object
})

const nodeType = ref('')

onUpdated(() => {
  nodeType.value = props.selectedNode.type

})
</script>

<template>
  <div v-if="nodeType == 'alb'">
    alb
  </div>
  <div v-else-if="nodeType == 'asg'">
    asg
  </div>
  <div v-else-if="nodeType == 'ec2'">
    ec2
  </div>
  <div v-else-if="nodeType == 'natgw'">
    natgw
  </div>
  <div v-else-if="nodeType == 'privatesubnet'">
    privatesubnet
  </div>
  <div v-else-if="nodeType == 'publicsubnet'">
    publicsubnet
  </div>
  <div v-else-if="nodeType == 'sg'">
    sg
  </div>
  <div v-else-if="nodeType == 'vpc'">
    vpc
  </div>
</template>
