<template>
  <v-app>
    <Header @openNavbar="openNavbar"/>
    <NavigationMenu v-model="isNavBarActiv"/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import Header from '@/widgets/header/Header.vue';
  import NavigationMenu from '@/widgets/navbar/NavigationMenu.vue';
  
  import { Ref, ref, toRefs } from 'vue';

  const isNavBarActiv = ref<boolean>(false)
  
  const openNavbar = () => {
    isNavBarActiv.value = !isNavBarActiv.value
  }
</script>
