<script setup>
import store from '@/store';
import { ref,watch } from 'vue';
let menu = ref(false);
let reset = ref(false);
let accessKey = ref(null);
let secretKey = ref(null);
let keyStatus = {
    accessKey:null,
    secretKey:null
}
let showAccess = ref(false);
let showSecret = ref(false);
const save = function () {
    //실제 api 호출 관련 필요..
    store.dispatch('user/saveKey',{
        accessKey: accessKey.value,
        secretKey: secretKey.value,
    }).then((res)=>{
        reset.value = false;
        menu.value = false;
        accessKey.value = null;
        secretKey.value = null;
    })
};
const closeMenu = function () {
    reset.value = false;
    menu.value = false;
}
const required = (v) => !!v || 'Field is required!';
const logout = () => {
    store.dispatch('login/logout');
};
watch(menu, async(newVal, oldVal) => {
    if (keyStatus.accessKey === null || keyStatus.secretKey === null) {
        const data = store.getters["user/getKeyStatus"]
        keyStatus.accessKey = data.accessKey;
        keyStatus.secretKey = data.secretKey;
    }
    reset.value = false;
    accessKey.value = null;
    secretKey.value = null;
})
</script>

<style>
.text-style {
    width: 50%;
    align-items: center;
    justify-self: center;
}
.text-row-style {
    height: 120px;
}
.text-field-style {
    height: 50px;
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
                <v-list-item align="right">
                    <v-btn variant="text" @click="logout">로그아웃</v-btn>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-list v-if="!reset">
                <v-list-item>
                    <v-list-item-title>
                        <v-row>
                            <v-col cols="12" md="4" align="right">
                                ACCESS KEY 
                            </v-col>
                            <v-col cols="12" md="3" align="center">
                                <v-icon color="black" icon="mdi-arrow-right-bold-box-outline"/>
                            </v-col>
                            <v-col cols="12" md="5" align="center" v-if="keyStatus.accessKey===null">
                                <v-chip color="red" text-color="white">Disabled</v-chip>
                            </v-col>
                            <v-col cols="12" md="5" align="center" v-else>
                                <v-chip color="green" text-color="white">Enabled</v-chip>
                            </v-col>
                        </v-row>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <v-row>
                            <v-col cols="12" md="4" align="right">
                                SECRET KEY 
                            </v-col>
                            <v-col cols="12" md="3" align="center">
                                <v-icon color="black" icon="mdi-arrow-right-bold-box-outline"/>
                            </v-col>
                            <v-col cols="12" md="5" align="center" v-if="keyStatus.secretKey===null">
                                <v-chip color="red" text-color="white">Disabled</v-chip>
                            </v-col>
                            <v-col cols="12" md="5" align="center" v-else>
                                <v-chip color="green" text-color="white">Enabled</v-chip>
                            </v-col>
                        </v-row>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <v-list v-else>
                <v-card elevation="0">
                    <v-row
                        align="center"
                        justify="center"
                        align-content="center"
                        class="text-row-style"
                    >
                        <v-col cols="12" md="4" align="right">ACCESS_KEY = </v-col>
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
                                counter
                                variant="outlined"
                                class="text-field-style"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                        align="center"
                        justify="center"
                        align-content="center"
                        class="text-row-style"
                    >
                        <v-col cols="12" md="4" align="right">SECRET_KEY = </v-col>
                        <v-col cols="12" sm="8" align="left">
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
                                counter
                                variant="outlined"
                                class="text-field-style"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-list>
            <v-card-actions>
                <v-spacer />
                <v-btn variant="text" @click="closeMenu"> 닫기 </v-btn>
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
