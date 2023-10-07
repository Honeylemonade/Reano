<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getArticles, addArticle, deleteArticleById } from '../service/modelService'
import moment from 'moment'
import bus from '../service/bus'
import { Article } from '../service/types';

const articles = ref(getArticles())
const currentArticleId = ref(articles.value[0].id)
const showList = ref(true)

// 用于显示view
onMounted(() => {
    changeArticleCard(articles.value[0].id)
})

function changeArticleCard(id: string) {
    currentArticleId.value = id
    bus.emit('ArticleChanged', id);
}

function addNewArticle() {
    addArticle(new Article("#标题", "#文章内容"))
    changeArticleCard(articles.value[0].id)
    refreshList()
}

function deleteArticle(id: string) {
    deleteArticleById(id)
    refreshList()
}

function refreshList() {
    articles.value = getArticles()
    showList.value = false
    showList.value = true
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
                <div v-for="item in articles">
                    <v-card-item :class="item.id == currentArticleId ? 'selectCard' : ''"
                        @click="changeArticleCard(item.id)">
                        <div class="title">{{ item.title }}</div>
                        <v-card-subtitle>{{ moment(item.createTime).format('YYYY/MM/DD') }}</v-card-subtitle>
                        <v-btn @click="deleteArticle(item.id)" size="small" icon="mdi-trash-can-outline"
                            variant="plain"></v-btn>
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
