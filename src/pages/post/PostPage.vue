<template >
  <v-container fluid class="h-100">
    <v-row>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </v-row>
    <v-row style="min-height: 86vh;">
      <v-col cols="12">
        <PostField :currentTitle="currentTitle!">
          <RouterView /> 
        </PostField>
      </v-col>
      <v-col class="align-self-end">
        <v-row justify="space-between">
          <v-col cols="1" >
            <PostNavigationButton v-if="prevLink != undefined" :path="prevLink.path" @click="changeCurrentLink(prevLink)" class="sticky-md-top"/>
          </v-col>
          <v-col cols="1" >
            <PostNavigationButton v-if="nextLink != undefined" :to="nextLink.path" :isForward="true" @click="changeCurrentLink(nextLink)" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script lang="ts" setup>
  import PostField from '@/widgets/postField/PostField.vue'
  import PostNavigationButton from '@/features/postNavigationButon/PostNavigationButton.vue';

  import { usePostsRoutesStore } from '@/entities/post/store';
  import { computed, onUnmounted, onUpdated, ref } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  import { findBaseName, findParentPath } from '@/shared/utils/parseUtils';

  const NAME_ROUTE_LOCAL_STORAGE = "route"

  const store = usePostsRoutesStore()
  const route = useRoute()
  const router = useRouter()
  
  let currentPostLink = store.getCurrentPath(route.path, NAME_ROUTE_LOCAL_STORAGE)
  router.push({name: currentPostLink?.name })

  let currentTitle = ref(currentPostLink?.title)
  
  // Links
  let breadcrumbs = computed(() => {
    return [
    {
      title: 'Главная',
      disable: false,
      to: getPathMainPage(route.fullPath)
    }, 
    {
      title: currentTitle.value!,
      disable: true,
      to: ''
    }
  ]
  }) 

  const nextLink = computed(() => {
    return store.getNextLink(route.path, currentPostLink) 
  })
  const prevLink = computed(() => {
    return store.getPrevLink(route.path, currentPostLink)
  })

  const changeCurrentLink = (newLink: typeof  currentPostLink) => {
    currentPostLink = newLink
  }

  const getPathMainPage = (path: string): string => {
    const baseName = findBaseName(path)
    const mainPageName = findParentPath(path, baseName!)
    const prevName = findParentPath(path, mainPageName!)
    const mainPageParentName = findParentPath(path, prevName!)
    return `/${mainPageParentName}/${mainPageName}`
  }
  

  // ** Hooks **
  onUpdated(() => {
    currentPostLink = store.getCurrentPath(route.path, NAME_ROUTE_LOCAL_STORAGE)
    currentTitle.value = currentPostLink?.title
  })
  onBeforeRouteUpdate(async (to, from) => {
    store.saveCurrentPathLocalStorage(NAME_ROUTE_LOCAL_STORAGE, currentPostLink!)
  })
  onUnmounted(async () => {
    store.deleteCurrentPathLocalStorage(NAME_ROUTE_LOCAL_STORAGE)
  })
</script>