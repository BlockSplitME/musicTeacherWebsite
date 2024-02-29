<template>
  <v-container :fluid="true" class="h-100 ">
    <v-row class="h-100" >
      <v-col style="margin: 0 10% 0 10%;">
        <RouterView /> 
      </v-col>
    </v-row>
    <v-row class="fixed-bottom">
      <v-col>
        <RouterLink v-if="nextLink != undefined" :to="nextLink.path" @click="changeCurrentLink(nextLink)"> Следующий </RouterLink>
      </v-col>
      <v-col>
        <RouterLink v-if="prevLink != undefined" :to="prevLink.path" @click="changeCurrentLink(prevLink)"> Предыдущий </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { usePostsRoutesStore } from './store';
  import { computed, onUnmounted } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  
  const NAME_ROUTE_LOCAL_STORAGE = "route"

  const store = usePostsRoutesStore()
  const route = useRoute()
  const router = useRouter()
  
  let currentPostLink = store.getCurrentPath(route.path, NAME_ROUTE_LOCAL_STORAGE)
  router.push({name: currentPostLink?.name })
  
  const nextLink = computed(() => {
    return store.getNextLink(route.path, currentPostLink) 
  })
  const prevLink = computed(() => {
    return store.getPrevLink(route.path, currentPostLink)
  })

  const changeCurrentLink = (newLink: typeof  currentPostLink) => {
    currentPostLink = newLink
  }
  
  onBeforeRouteUpdate(async (to, from) => {
    store.saveCurrentPathLocalStorage(NAME_ROUTE_LOCAL_STORAGE, currentPostLink!)
  })

  onUnmounted(async () => {
    store.deleteCurrentPathLocalStorage(NAME_ROUTE_LOCAL_STORAGE)
  })

</script>