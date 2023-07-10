<script setup>
import { ref } from "vue";
import { onUpdated } from "vue";

const props = defineProps({
  selectedNode: Object,
});

const nodeType = ref("");

onUpdated(() => {
  console.log("drawer update");
  nodeType.value = props.selectedNode.type;
});
</script>

<template>
  <div v-if="nodeType == 'alb'">
    <v-card class="mx-auto">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-logo">
            <v-img src="@/assets/resources/aws/alb.png" />
          </div>
          <div class="drawer-header-title">AWS Load Balancer</div>
        </v-row>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'asg'">
    <v-card class="mx-auto">
      <v-container>
        <div class="drawer-header-logo">
          <v-img src="@/assets/resources/aws/asg.png" />
        </div>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-title">Auto Scailing Group</div>
        </v-row>
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
    <v-card class="mx-auto" title="EC2">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-logo">
            <v-img src="@/assets/resources/aws/ec2.png" />
          </div>
          <div class="drawer-header-title">EC2</div>
        </v-row>
        <v-text-field
          v-model="selectedNode.data.instance_type"
          color="primary"
          label="Instance Type"
          variant="underlined"
        ></v-text-field>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'natgw'">
    <v-card class="mx-auto">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-logo">
            <v-img src="@/assets/resources/aws/alb.png" />
          </div>
          <div class="drawer-header-title">Nat Gateway</div>
        </v-row>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'privatesubnet'">
    <v-card class="mx-auto">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-title">Private Subnet</div>
        </v-row>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'publicsubnet'">
    <v-card class="mx-auto">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-title">Public Subnet</div>
        </v-row>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'sg'">
    <v-card class="mx-auto">
      <v-container>
        <v-row class="drawer-header" align="center">
          <div class="drawer-header-title">Security Group</div>
        </v-row>
        <v-text-field
          v-model="selectedNode.data.name"
          color="primary"
          label="Name"
          variant="underlined"
        ></v-text-field>
      </v-container>
    </v-card>
  </div>
  <div v-else-if="nodeType == 'vpc'">
    <v-card class="mx-auto" title="VPC">
      <v-container>
        <v-text-field
          v-model="selectedNode.data.name"
          color="primary"
          label="Name"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="selectedNode.data.cidr"
          color="primary"
          label="CIDR"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="selectedNode.data.public_subnet"
          color="primary"
          label="Public Subnet"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="selectedNode.data.private_subnet"
          color="primary"
          label="Private Subnet"
          variant="underlined"
        ></v-text-field>
      </v-container>
    </v-card>
  </div>
</template>

<style>
.drawer-header {
  padding-bottom: 3rem;
  padding-top: 2rem;
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
</style>
