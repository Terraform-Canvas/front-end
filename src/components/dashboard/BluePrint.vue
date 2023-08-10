<script setup>
import store from '@/store';
import { ref } from 'vue';
import { blueprintData } from './BluePrintData';
const showDialog = ref(false);
const selectItem = ref('');

const onClick = () => {
    showDialog.value = false;
    store.dispatch('node/setBluePrintNodes', blueprintData[selectItem.value]);
};
</script>

<template>
    <div class="text-center">
        <v-dialog v-model="showDialog" width="auto">
            <template v-slot:activator="{ props }">
                <v-app-bar-nav-icon
                    ><v-icon v-bind="props"
                        >mdi-tray-full</v-icon
                    ></v-app-bar-nav-icon
                >
            </template>

            <v-card class="dialog-form">
                <v-card-item>
                    <div>
                        <v-select
                            label="Select"
                            v-model="selectItem"
                            :items="['ASG']"
                        ></v-select>
                        <div v-if="selectItem == 'EKS'"></div>
                        <div v-else-if="selectItem == 'ASG'">
                            <v-container>
                                <v-row>
                                    <v-img
                                        :width="400"
                                        aspect-ratio="16/9"
                                        cover
                                        src="@/assets/resources/blueprints/ASG.png"
                                    ></v-img>
                                </v-row>

                                <v-row>
                                    <div>
                                        Build Auto Scailing Group for scale
                                        in-out.
                                    </div>
                                </v-row>
                                <v-row>
                                    <div>
                                        Resources <br />
                                        <ul>
                                            <li>Auto Scailing Group</li>
                                            <li>Elastic Load Balancer</li>
                                        </ul>
                                    </div>
                                </v-row>
                            </v-container>
                        </div>
                    </div>
                </v-card-item>
                <v-card-actions>
                    <v-btn @click="onClick" class="save-btn"> 만들기 </v-btn>
                    <v-btn @click="showDialog = false" class="cancel-btn">
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style>
.text-header {
    font-weight: normal;
}
.dialog-form {
    min-width: 400px;
    min-height: 200px;
}
.cancel-btn {
    margin-left: auto;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    background-color: #fa5252;
    color: white;
    font-weight: bold;
}
s .save-btn {
    margin-left: auto;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    background-color: #404ae7;
    color: white;
    font-weight: bold;
}
</style>
