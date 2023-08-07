<script setup>
import { reactive, onBeforeUpdate, defineEmits, defineProps, watch } from 'vue';
</script>
<template>
    <v-card class="mx-auto">
        <v-container>
            <v-row class="text-right">
                <v-col>
                    <v-icon class="close-btn" v-bind="props" @click="closeForm"
                        >mdi-close</v-icon
                    >
                </v-col>
            </v-row>
            <v-row class="drawer-header" align="center">
                <div class="drawer-header-logo">
                    <v-img src="@/assets/resources/aws/EC2.svg" />
                </div>
                <div class="drawer-header-title">EC2</div>
            </v-row>
            <v-combobox
                :model-value="currentNodeData.instance_type"
                @input="updateValue($event, 'instance_type')"
                :items="instance_items"
                color="primary"
                label="Instance Type"
                variant="underlined"
            />
            <v-row>
                <v-col class="text-right">
                    <v-btn class="cancel-btn" @click="closeForm">Close</v-btn>
                    <v-btn class="save-btn" @click="saveForm">Save</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<style></style>
