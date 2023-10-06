<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getArticle, updateArticle } from '../service/modelService';
import { Article } from '../service/types';
import bus from '../service/bus'


const article = ref<Article>(new Article("", ""))
function refreshArticle(id: String) {
    article.value = getArticle(id)
}

bus.on('ArticleChanged', function (id) {
    refreshArticle(id);
});

onMounted(() => {
    let art = getArticle("46ddf6b4-c8c4-41a3-bfd0-94cede2eaf08")
    article.value = art
})
</script>

<template>
    <v-virtual-scroll :items="['1']" style="margin: 0 auto;">
        <div class="articleView">
            <h2>
                <textarea style="resize:none;border:0;outline:none;" spellcheck="false" v-on:change="updateArticle(article)"
                    v-model="article.title"></textarea>
            </h2>
            <textarea style="resize:none;border:0;outline:none;height: 80vh;" spellcheck="false" v-on:change="updateArticle(article)"
                v-model="article.content"></textarea>
        </div>
    </v-virtual-scroll>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 100%;
}

.articleView {
    font-family: 'Times New Roman', Times, serif;
    padding: 20px 20px;
    height: 100vh
}
</style>
