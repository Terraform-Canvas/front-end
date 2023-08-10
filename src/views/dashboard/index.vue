<template>
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        width="500"
        temporary
    >
        <DrawerInput
            :drawer="drawer"
            v-click-outside="handleClickOutside"
            @handleRightDrawer="handleRightDrawer"
        />
    </v-navigation-drawer>
    <v-main>
        <v-container fluid class="container-size">
            <v-row class="row-vueflow">
                <v-col><NodePlane @nodeClicked="handleRightDrawer" /></v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup>
import NodePlane from '@/components/node/NodePlane';
import DrawerInput from '@/components/aws/DrawerInput.vue';
import { ref } from 'vue';
import store from '@/store';

const drawer = ref(false);

const handleRightDrawer = () => {
    drawer.value = !drawer.value;
    store.dispatch('node/resetSelectedNode');
};

const handleClickOutside = () => {
    if (store.getters['node/getSelectedNode'] && !drawer.value) {
        drawer.value = true;
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/main.css';
</style>
