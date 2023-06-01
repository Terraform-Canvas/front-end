<template>
  <v-app-bar
    class="justify-center"
    height="60"
  >
    <v-responsive max-width="100">
      <v-img src="@/assets/images/canvas-logo.jpg" width="auto" height="auto"/>
    </v-responsive>
    <v-spacer></v-spacer>
    <v-icon medium>mdi-account</v-icon>
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

<script setup>
</script>
