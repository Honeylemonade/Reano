<script setup lang="ts">
import { ref } from 'vue'
import { getArticles, addArticle } from '../service/modelService'
import moment from 'moment'
import bus from '../service/bus'
import { Article } from '../service/types';

const articles = ref(getArticles())
const currentIndex = ref(0)
const showList = ref(true)

function changeArticleCard(index: number) {
    currentIndex.value = index
    bus.emit('ArticleChanged', articles.value[index].id);
}

function addNewArticle() {
    addArticle(new Article("#标题", "#文章内容"))
    articles.value = getArticles()
    changeArticleCard(currentIndex.value)
    showList.value = false
    showList.value = true
    currentIndex.value = 0
}

</script>

<template>
    <div style="border-style: solid; border: 2px; border-color: darkgrey;">
        <div class="toolBar">
            <v-btn size="small" icon="mdi-sort" variant="plain"></v-btn>
            <v-btn @click="addNewArticle()" size="small" icon="mdi-note-edit-outline" variant="plain"></v-btn>
            <v-btn size="small" icon="mdi-magnify" variant="plain"></v-btn>
        </div>
        <v-virtual-scroll :items="['1']">
            <template v-if="showList">
                <div v-for="(item, index) in articles">
                    <v-card-item :class="index == currentIndex ? 'selectCard' : ''" @click="changeArticleCard(index)">
                        <div class="title">{{ item.title }}</div>
                        <v-card-subtitle>{{ moment(item.createTime).format('YYYY/MM/DD') }}</v-card-subtitle>
                    </v-card-item>
                    <div style=" padding: 10px 10px;">
                        <v-divider></v-divider>
                    </div>
                </div>
            </template>
        </v-virtual-scroll>

    </div>
</template>

<style scoped>
.v-card-item {
    border-radius: 5px;
    margin: 5px;
}

.selectCard {
    background-color: #eff1f2;
    background: linear-gradient(to right,
            #3e75c5 5px,
            #eff1f2 5px);
}

.toolBar {
    height: 10vh;
    height: 50px;
}

.v-virtual-scroll {
    /* height="90vh" */
    height: 90vh;
}

.title {
    font-weight: 700;
    font-family: 'Times New Roman', Times, serif;
    /* overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    word-break: normal;
    word-wrap: break-word; */
}

.v-container {
    padding: 0;
    margin: 0;
}
</style>
