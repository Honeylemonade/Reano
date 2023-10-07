import { onMounted } from 'vue';
import { getArticles } from '../service/dbService';
import { Article } from '../service/types';

onMounted(() => {
new Article();
console.log(getArticles);
console.log(getArticles);
});
