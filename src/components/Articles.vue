<script setup lang="ts">
import { onMounted } from 'vue'
import { getArticles, addArticle } from '../service/modelService'
import { Article } from '../service/types';

onMounted(() => {
    const a = new Article("tt", 'con');
    addArticle(a)
    console.log(getArticles())
})

</script>

<template>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
    <h1>文章 1</h1>
</template>

<style scoped></style>
