<template>
    <v-app-bar color="white" height="50" extended extension-height="30">
        <v-responsive max-width="150">
            <v-img
                width="auto"
                class="logo"
                src="@/assets/images/canvas-logo.png"
            />
        </v-responsive>
        <v-spacer></v-spacer>

        <template v-slot:extension>
            <v-tabs>
                <v-tab class="white--text text-none" href="/">main</v-tab>
            </v-tabs>
        </template>
        <BluePrint />
        <UserProfile />
    </v-app-bar>
</template>

<script setup>
import UserProfile from '@/components/dashboard/UserProfile.vue';
import BluePrint from '@/components/dashboard/BluePrint.vue';
import store from '@/store';
import { onMounted } from 'vue';
onMounted(() => {
    store.dispatch('user/getKey')
})
</script>

<style>
.logo {
    padding-left: 2rem;
    object-fit: cover;
}
</style>
