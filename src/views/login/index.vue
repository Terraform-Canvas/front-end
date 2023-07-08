<script setup>
import store from '@/store';
import { ref } from 'vue'
let password=ref(null);
let email=ref(null);
let loading=ref(false);
let form=ref(false);
let show=ref(false);
const onSubmit = () => {
    if (!form.value) reutrn
    loading.value=true;
    const params = {
        email: email,
        password: password
    }
    console.log(store)
    store.dispatch('login/login',params);
}
const required = (v) => !!v || 'Field is required!'
const emailValid = (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
};
</script>
  
<template>
    <v-main class="blue-grey lighten-4">
        <v-container class="fill-height">
            <v-row align-content="center" justify="center">
                <v-col cols="12" md="4" align-self="center">
                    <v-card class="mx-auto px-6 py-8" max-width="400" elevation="5">
                        <v-card-title>
                            <v-row align-content="center" justify="center">
                                <v-col cols="12" md="8" align-self="center"><v-img src='@/assets/images/canvas-logo.jpg' aspect-ratio="4/3" :width="200" cover/></v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                            <v-form
                                v-model="form"
                                @submit.prevent="onSubmit"
                            >
                                <v-text-field
                                    v-model="email"
                                    :readonly="loading"
                                    :rules="[required,emailValid]"
                                    class="mb-2"
                                    clearable
                                    label="email"
                                    prepend-inner-icon="mdi-account"
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    :readonly="loading"
                                    :rules="[required]"
                                    clearable
                                    label="password"
                                    placeholder="Enter your password"
                                    :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    @click:prepend-inner="show = !show"
                                    type="password"
                                    counter
                                ></v-text-field>
                                <v-btn 
                                    class="white--text"
                                    :loading="loading"
                                    block
                                    color="#404AE7"
                                    size="large"
                                    type="submit"
                                    variant="elevated"
                                    text
                                >
                                로그인
                                </v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>