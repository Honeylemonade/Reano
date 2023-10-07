<script setup lang="ts">
import { ref } from 'vue'
import { getArticle, getUnknownWords, getDescrptionByWord } from '../service/dbService';
import { Article } from '../service/types';
import bus from '../service/bus'


const article = ref<Article>(new Article("", ""))
const unknownWords = ref(getUnknownWords())


bus.on('ArticleChanged', function (id) {
    refreshArticleView(id)
});

function refreshArticleView(id: string) {
    article.value = getArticle(id)
}
function getArticleRegSplitWords(): string[] {
    let regStr = "/"
    unknownWords.value.forEach(e => regStr = regStr.concat(e.word + "|"))
    regStr = regStr.concat("./g")
    const result = article.value.content.match(eval(regStr)) as string[]
    // TODO 判断了多次正则
    // console.log(result)
    return result
}
</script>

<template>
    <div>
        <v-virtual-scroll :items="['1']" style="margin: 0 auto;">
            <div class="articleView">
                <h1>
                    {{ article.title }}
                </h1>
                <div class="content">
                    <span v-for="item in getArticleRegSplitWords()">
                        <template v-if="item.length === 1">
                            {{ item }}
                        </template>

                        <v-tooltip v-if="item.length != 1" :text="getDescrptionByWord(item)" location="top">
                            <template v-slot:activator="{ props }">
                                <span class="hightLightWord" v-bind="props">{{ item }}</span>
                            </template>
                        </v-tooltip>
                    </span>
                </div>
            </div>
        </v-virtual-scroll>
    </div>
</template>

<style scoped>
.hightLightWord {
    background-color: #ffff7b;
    border-radius: 3px;
}

.content {
    font-size: 20px;
}

.articleView {
    font-family: 'Times New Roman', Times, serif;
    padding: 20px 20px;
    height: 100vh
}
</style>