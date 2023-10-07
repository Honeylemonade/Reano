<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addWord, getWords } from '../service/dbService'
import { Word } from '../service/types';


const words = ref()
const showList = ref(true)

onMounted(() => {
    words.value = getWords()
})

function addNewWord(word: Word) {
    addWord(word)
    refresh()
}


function refresh() {
    words.value = getWords()
    showList.value = false
    showList.value = true
}

</script>

<template>
    <span>所有单词 / </span>
    <span>排序 / </span>
    <v-btn @click='addNewWord(new Word("episode", "一段经历，一段时期；（电视剧或广播剧的）集", []))' size="small" icon="mdi-plus"
        variant="plain"></v-btn>

    <div v-show="showList">
        <div v-for="(item, index) in words">
            {{ index + 1 }}  |  {{ item.word }}
        </div>
    </div>
</template>

<style scoped></style>
