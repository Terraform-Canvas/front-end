<template>
  <v-app-bar color="white" height="50" extended extension-height="30">
    <v-responsive max-width="100">
      <v-img src="@/assets/images/canvas-logo.jpg" width="auto" height="auto" />
    </v-responsive>
    <v-spacer></v-spacer>
    
    <template v-slot:extension>
      <v-tabs>
        <v-tab class="white--text text-none" href="/">main</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script setup></script>

<style>
.logo {
  padding-left: 2rem;
  object-fit: cover;
}
</style>
