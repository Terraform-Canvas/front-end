<script setup>
import ResourceNodeCommon from './ResourceNodeCommon.vue';
</script>

<template>
    <div class="node-wrapper">
        <div class="node-header">
            <div class="node-title">VPC</div>
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

.node-title {
    width: 30px;
    height: 30px;
    font-weight: bold;
    margin-right: auto;
}

.node-header {
    display: flex;
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
