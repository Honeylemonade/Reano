<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addWord, getWords } from '../service/dbService'
import { Word } from '../service/types';


const words = ref()
const showList = ref(true)
const tempWord = ref<Word>(new Word("", "", []))

onMounted(() => {
    words.value = getWords()
})

function addNewWord() {
    addWord(new Word(tempWord.value.word, tempWord.value.descrption, tempWord.value.sentences))
    tempWord.value.word = ""
    tempWord.value.descrption = ""
    tempWord.value.sentences = []
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
    <v-dialog style="width: 50%;">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" size="small" icon="mdi-plus" variant="plain"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="添加单词" style="padding: 0 20px;">
                <v-text-field v-model="tempWord.word" label="请输入单词" variant="underlined"></v-text-field>
                <v-text-field v-model="tempWord.descrption" label="请输入描述" variant="underlined"></v-text-field>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="确认" @click='addNewWord(), isActive.value = false'></v-btn>
                    <v-btn text="取消" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
    <div v-show="showList">
        <div v-for="(item, index) in words">
            {{ index + 1 }} | {{ item.word }} | {{ item.descrption }}
        </div>
    </div>
</template>

<style scoped></style>
