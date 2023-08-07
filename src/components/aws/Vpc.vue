<script setup>
import ResourceNodeCommon from './ResourceNodeCommon.vue';
</script>

<template>
    <div class="node-wrapper">
        <div class="node-header">
            <div class="node-title">VPC</div>
            <ResourceNodeCommon />
        </div>
        <div class="node-detail-container">
            <div class="node-logo">
                <v-img src="@/assets/resources/aws/VPC.svg" />
            </div>
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
