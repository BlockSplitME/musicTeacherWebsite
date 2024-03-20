<template>
    <v-container fluid> 
        <v-row class="section-content">
            <v-col>
                <RouterView /> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <PostsCard />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import PostsCard from '@/widgets/postsCard/PostsCard.vue';
</script>