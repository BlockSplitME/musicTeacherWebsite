<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Header from '@/widgets/header/Header.vue';
  
  export default {
    components: {
      Header
    }
  }

</script>
