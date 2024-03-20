<template>
    <v-card variant="tonal" title="Публикации">
        <v-container fluid>
            <v-row align="center" >
                <v-col cols="1" class="text-center">
                    <ArrowButtonVue></ArrowButtonVue>
                </v-col>
                <v-col>
                    <v-list>
                        <v-list-item v-for="post in posts">
                            <PostCard :title="post.title" :text="post.subtitle" @click="goRoute(post.name)"/>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="1" class="text-center">
                    <ArrowButtonVue :isForward="true"></ArrowButtonVue>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
    import PostCard from '@/shared/ui/postCard/PostCard.vue';
    import { usePostsRoutesStore } from '@/entities/post/store';
    import { useRoute, useRouter } from 'vue-router';
    import { findBaseName } from '@/shared/utils/parseUtils';
    import { computed } from 'vue';
import ArrowButtonVue from '@/shared/ui/arrowButton/ArrowButton.vue';

    const CARD_SIZE = 3
    const route = useRoute()
    const router = useRouter()
    const store = usePostsRoutesStore()
    
    let index = 0;
    let windowsNumber = store.getPostsFromSection(findBaseName(route.fullPath)!)?.toArray().length;

    const posts = computed( () => {
        const array = store.getPostsFromSection(findBaseName(route.fullPath)!)?.toArray()
        return array?.slice(index, index + CARD_SIZE)
    })

    const goRoute = (name: string) => {
        router.push({name: name})
    }
</script>