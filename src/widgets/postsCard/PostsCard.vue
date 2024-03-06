<template>
    <v-list>
        <v-list-item v-for="post in posts">
            <PostCard :title="post.title" :text="post.subtitle" @click=""/>
        </v-list-item>
    </v-list>
</template>

<script setup lang="ts">
    import PostCard from '@/shared/ui/postCard/PostCard.vue'
    import { usePostsRoutesStore } from '@/entities/post/store'
    import { useRoute } from 'vue-router';
    import { findBaseName } from '@/shared/utils/parseUtils';

    const route = useRoute()
    const store = usePostsRoutesStore()

    const posts = store.getPostsFromSection(findBaseName(route.fullPath)!)?.toArray()
</script>