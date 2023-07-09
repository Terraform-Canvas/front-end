<script setup>
import store from '@/store';
import { ref } from 'vue';
let menu = ref(false)
let reset = ref(false)
let accessKey=ref(null);
let secretKey=ref(null);
let showAccess=ref(false);
let showSecret=ref(false);
const save = function() {
  console.log("Test")
}
const required = (v) => !!v || 'Field is required!'
</script>

<style>
</style>

<template>
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon><v-icon v-bind="props">mdi-account</v-icon></v-app-bar-nav-icon>
      </template>
      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://user-images.githubusercontent.com/31406378/108641411-f9374f00-7496-11eb-82a7-0fa2a9cc5f93.png"
            :title="store.state.user.name"
            :subtitle="store.state.user.email"
          />
        </v-list>
        <v-divider/>
        <v-list v-if="!reset">
          <v-list-item
            title="ACCESS_KEY"
            subtitle="xxx"
          >
          </v-list-item>
          <v-list-item
            title="SECRET_KEY"
            subtitle="xxx"
          >
          </v-list-item>
        </v-list>
        <v-list v-else>
            <v-responsive max-width="200">
                <v-text-field
                    v-model="accessKey"
                    :rules="[required]"
                    outlined
                    clearable
                    label="access key input"
                    :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showAccess ? 'text' : 'password'"
                    @click:prepend-inner="show = !show"
                    type="password"
                    counter
                ></v-text-field>
            </v-responsive>
            <v-responsive max-width="200">
                <v-text-field
                    v-model="secretKey"
                    :rules="[required]"
                    outlined
                    clearable
                    label="secret key input"
                    :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showSecret ? 'text' : 'password'"
                    @click:prepend-inner="show = !show"
                    type="password"
                    counter
                ></v-text-field>
            </v-responsive>
        </v-list>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            variant="text"
            @click="menu = false"
          >
            close
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="reset=true"
            v-if="!reset"
          >
            reset
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="save"
            v-else
          >
            save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>
