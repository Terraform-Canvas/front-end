<script setup>
import { ref } from 'vue';
import { onUpdated } from 'vue';

const props = defineProps({
  selectedNode: Object
})

const nodeType = ref('')

onUpdated(() => {
  console.log("drawer update")
  nodeType.value = props.selectedNode.type

})
</script>

<template>
  <div v-if="nodeType == 'alb'">
    alb
  </div>
  <div v-else-if="nodeType == 'asg'">
    <v-card
      class="mx-auto"
      title="AutoScaling Group"
    >
      <v-container>
        <v-text-field
          v-model="selectedNode.data.min_size"
          color="primary"
          label="Min Size"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="selectedNode.data.max_size"
          color="primary"
          label="Max Size"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="selectedNode.data.desired_capacity"
          color="primary"
          label="Desired Capacity"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="selectedNode.data.image_id"
          color="primary"
          label="Image Id"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="selectedNode.data.instance_type"
          color="primary"
          label="Instance Type"
          variant="underlined"
        ></v-text-field>

      </v-container>
    </v-card>
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
    <v-card
      class="mx-auto"
      title="VPC"
    >
      <v-container>
        <v-text-field
          v-model="selectedNode.data.name"
          color="primary"
          label="Name"
          variant="underlined"
        ></v-text-field>

      </v-container>
    </v-card>
  </div>
</template>
