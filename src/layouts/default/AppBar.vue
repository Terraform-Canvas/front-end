<template>
  <v-app-bar class="header-bar">
    <v-responsive max-width="150">
      <v-img src="@/assets/images/canvas-logo.png" width="auto" height="auto" />
    </v-responsive>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon><v-icon>mdi-account</v-icon></v-app-bar-nav-icon>
    <template v-slot:extension>
      <v-tabs class="header-tab-item" v-model="tab">
        <v-tab href="/">main</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script setup></script>
<style>
.header-bar {
  padding: 0rem 2rem;
}
.header-tab-item {
  font-weight: bold;
}
</style>
