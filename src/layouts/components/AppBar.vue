<template>
  <v-app-bar color="white" height="50" extended extension-height="30">
    <v-responsive max-width="100">
      <v-img src="@/assets/images/canvas-logo.jpg" width="auto" height="auto" />
    </v-responsive>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon><v-icon>mdi-account</v-icon></v-app-bar-nav-icon>
    <template v-slot:extension>
      <v-tabs>
        <v-tab class="white--text text-none" href="/">main</v-tab>
      </v-tabs>
    </template>
    <!-- text 위치 수정 필요 -->
    <!-- <v-row>
      <v-col>
        <v-responsive max-width="156">
          <v-text-field
            bg-color="grey-lighten-2"
            class="rounded-pill overflow-hidden"
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-col>
    </v-row> -->
  </v-app-bar>
</template>

<script setup></script>
