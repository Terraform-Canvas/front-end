<script setup>
import store from '@/store';
import axios from 'axios';
import { ref } from 'vue';
let menu = ref(false);
let reset = ref(false);
let accessKey = ref(null);
let secretKey = ref(null);
let showAccess = ref(false);
let showSecret = ref(false);
const save = function () {
    //실제 api 호출 관련 필요..
    reset.value = false;
    axios
        .post('/user/key', {
            accessKey: accessKey.value,
            secretKey: secretKey.value,
        })
        .then((res) => {
            menu.value = false;
            accessKey.value = null;
            secretKey.value = null;
        })
        .catch((err) => {
            console.error(err);
            //에러 처리 따로 추가 필요
        });
};
const required = (v) => !!v || 'Field is required!';
const logout = () => {
    store.dispatch('login/logout');
};
</script>

<style>
.text-style {
    width: 50%;
    align-items: center;
    justify-self: center;
}
</style>

<template>
    <v-menu v-model="menu" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-app-bar-nav-icon
                ><v-icon v-bind="props">mdi-account</v-icon></v-app-bar-nav-icon
            >
        </template>
        <v-card min-width="400">
            <v-list>
                <v-list-item
                    prepend-avatar="https://user-images.githubusercontent.com/31406378/108641411-f9374f00-7496-11eb-82a7-0fa2a9cc5f93.png"
                    :title="store.state.user.name"
                    :subtitle="store.state.user.email"
                />
                <v-list-item>
                    <v-spacer />
                    <v-btn variant="text" @click="logout">로그아웃</v-btn>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-list v-if="!reset">
                <!-- subtitle의 경우 enable disable 구분 필요 -->
                <v-list-item title="access key"> </v-list-item>
                <v-list-item title="secret key"> </v-list-item>
            </v-list>
            <v-list v-else class="">
                <v-card elevation="0">
                    <v-row
                        align="center"
                        justify="center"
                        align-content="center"
                    >
                        <v-col cols="12" md="3" align="right">Access = </v-col>
                        <v-col cols="12" md="8" align="left">
                            <v-text-field
                                v-model="accessKey"
                                :rules="[required]"
                                solo
                                clearable
                                label="access key input"
                                :prepend-inner-icon="
                                    show ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :type="showAccess ? 'text' : 'password'"
                                @click:prepend-inner="showAccess = !showAccess"
                                type="password"
                                counter
                                variant="solo-filled"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                        align="center"
                        justify="center"
                        align-content="center"
                    >
                        <v-col cols="12" md="3" align="right">Secret = </v-col>
                        <v-col cols="12" md="8" align="left">
                            <v-text-field
                                v-model="secretKey"
                                :rules="[required]"
                                outlined
                                clearable
                                label="secret key input"
                                :prepend-inner-icon="
                                    show ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :type="showSecret ? 'text' : 'password'"
                                @click:prepend-inner="showSecret = !showSecret"
                                type="password"
                                counter
                                variant="solo-filled"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-list>
            <v-card-actions>
                <v-spacer />
                <v-btn variant="text" @click="menu = false"> 닫기 </v-btn>
                <v-btn
                    color="primary"
                    variant="text"
                    @click="reset = true"
                    v-if="!reset"
                >
                    리셋
                </v-btn>
                <v-btn color="primary" variant="text" @click="save" v-else>
                    저장
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>
