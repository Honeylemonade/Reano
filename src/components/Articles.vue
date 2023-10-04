<script setup lang="ts">
import db from '../service/dbUtils'
import { onMounted } from 'vue'

onMounted(() => {
    console.log(db)
})

</script>

<template>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
</template>

<style scoped></style>
