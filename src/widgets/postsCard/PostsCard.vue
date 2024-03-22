<template>
    <v-card variant="tonal" title="Публикации">
        <v-container fluid>
            <v-row align="center">
                <v-col cols="2" class="text-center">
                    <ArrowButtonVue v-if="index - CARD_SIZE > 0" @click="prevPosts"></ArrowButtonVue>
                </v-col>
                <v-col>
                    <v-list>
                        <v-list-item v-for="post in posts">
                            <PostCard :title="post.title" :text="post.subtitle" @click="goRoute(post.name)"/>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="2" class="text-center">
                    <ArrowButtonVue v-if="allPosts && allPosts.length >= index + CARD_SIZE" :isForward="true" @click="nextPosts"></ArrowButtonVue>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
    import PostCard from '@/shared/ui/postCard/PostCard.vue';
    import ArrowButtonVue from '@/shared/ui/arrowButton/ArrowButton.vue';
    
    import { usePostsRoutesStore } from '@/entities/post/store';
    import { useRoute, useRouter } from 'vue-router';
    import { findBaseName } from '@/shared/utils/parseUtils';
    import { computed, ref, watch } from 'vue';

    const CARD_SIZE = 3

    const route = useRoute()
    const router = useRouter()
    const store = usePostsRoutesStore()
    
    let index = ref<number>(1);
    
    const posts = computed( () => {
        return allPosts.value?.slice(index.value - 1, index.value - 1 + CARD_SIZE)
    })
    const allPosts = computed(() => {
        return store.getPostsFromSection(findBaseName(route.fullPath)!)?.toArray()
    }) 
    
    watch(route, () => {
        index.value = 1
    })

    const nextPosts = () => {
        index.value += CARD_SIZE
    }
    const prevPosts = () => {
        index.value -= CARD_SIZE
    }

    const goRoute = (name: string) => {
        router.push({name: name})
    }

</script>