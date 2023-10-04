<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue"
import { } from './service/dbUtils'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2" style="padding-bottom: 0;">
        <Sidebar></Sidebar>
      </v-col>
      <v-col cols="10">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-container {
  padding: 0;
  margin: 0;
}
</style>
