<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>


<template>
    <div class="sideBar">
        <v-list-item link title="文章库" @click='router.push("/Articles")'></v-list-item>
        <v-list-item link title="单词本" @click='router.push("/Words")'></v-list-item>
    </div>
    <div class="drager"></div>
</template>

<style scoped>
.sideBar {
    background-color: #232527;
    color: aliceblue;
    margin: 0 auto;
    padding: 30px 0px;
    text-align: center;

}

.drager {
    background-color: #232527;
    min-height: 100vh;
    -webkit-app-region: drag;
}
</style>
