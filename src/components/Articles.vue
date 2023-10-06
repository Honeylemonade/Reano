<script setup lang="ts">
import ArticleList from './ArticleList.vue'
import ArticleView from './ArticleView.vue'

</script>

<template>
    <v-container>
        <v-row no-gutters justify="center">
            <v-col cols="4" style="padding-bottom: 0; border-style: solid;border-color: #dedede; border-width: 1px;">
                <ArticleList></ArticleList>
            </v-col>
            <v-col cols="8">
                <ArticleView></ArticleView>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
