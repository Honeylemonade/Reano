<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { getArticle, getUnknownWords } from '../service/dbService';
import { Article } from '../service/types';
import bus from '../service/bus'


const article = ref<Article>(new Article("", ""))
const unknownWords = ref(getUnknownWords())


bus.on('ArticleChanged', function (id) {
    refreshArticle(id)
});

function refreshArticle(id: string) {
    article.value = getArticle(id)
    // 需要dom渲染完后执行
    nextTick(() => {
        refreshHighlightWord()
    })
}

function refreshHighlightWord() {
    const cover = document.getElementById("cover")
    const context = document.getElementById("context") as HTMLInputElement
    if (cover == null || context == null) {
        console.error("未找到目标元素")
    } else {
        // 找到高亮词
        // 构建正则表达式
        let regStr = "/"
        unknownWords.value.forEach(e => regStr = regStr.concat("" + e.word + "|"))
        regStr = regStr.slice(0, regStr.length - 1).concat("/gi")

        cover.innerHTML = context.value.replace(eval(regStr), function (x) {
            return '<span style=" background-color: #d5fead; border-radius: 3px;">' + x + '</span>';
        })
    }
}
</script>

<template>
    <v-virtual-scroll :items="['1']" style="margin: 0 auto;">
        <div class="articleView">
            <h1>
                {{ article.title }}
            </h1>
            <v-tooltip text="adj.综合性的，全面的；有理解力的" location="top">
                <template v-slot:activator="{ props }">
                    <span class="hightLightWord" v-bind="props">Tooltip</span>
                </template>
            </v-tooltip>

            <div class="content">
                {{ article.content }}
            </div>
        </div>
    </v-virtual-scroll>
</template>

<style scoped>
.hightLightWord {
    background-color: #d5fead;
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