<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { getArticle, updateArticle, getUnknownWords } from '../service/dbService';
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
            <h2>
                <textarea style="resize:none;border:0;outline:none;" spellcheck="false" v-on:change="updateArticle(article)"
                    v-model="article.title"></textarea>
            </h2>
            <div style="position:relative;height: 200px;">
                <textarea id="context" class="context" spellcheck="false" v-model="article.content"
                    v-on:change="updateArticle(article)" v-on:input="refreshHighlightWord()">
                </textarea>
                <div id="cover" class="cover" @hov="console.log(1)"></div>
            </div>
        </div>
    </v-virtual-scroll>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 100%;
    white-space: pre-wrap;
}

.hightLightWord {
    background-color: #d5fead;
    border-radius: 3px;
}

.articleView {
    font-family: 'Times New Roman', Times, serif;
    padding: 20px 20px;
    height: 100vh
}

.context {
    position: absolute;
    z-index: 2;
    resize: none;
    border: 0;
    outline: none;
    background-color: beige;
    color: black !important;
    -webkit-text-fill-color: transparent;
}

.cover {
    position: absolute;
    z-index: 3;
    /* opacity: 0.5; */
    /* 让这个divtou */
    pointer-events: none;
    background-color: transparent;
}
</style>