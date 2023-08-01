<template>
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        width="500"
        temporary
    >
        <DrawerInput :drawer="drawer" @handleRightDrawer="handleRightDrawer" />
    </v-navigation-drawer>
    <v-main>
        <v-container fluid class="container-size">
            <v-row class="row-vueflow">
                <v-col><NodePlane @nodeClicked="handleRightDrawer" /></v-col>
            </v-row>
            <v-row>
                <v-col><MainBottom /></v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup>
import NodePlane from '@/components/node/NodePlane';
import MainBottom from '@/components/dashboard/MainBottom';
import DrawerInput from '@/components/aws/DrawerInput.vue';
import { ref } from 'vue';
import store from '@/store';

const drawer = ref(false);

const handleRightDrawer = () => {
    drawer.value = !drawer.value;
    store.dispatch('node/resetSelectedNode');
};
</script>

<style lang="scss" scoped>
@import '@/styles/main.css';
</style>
