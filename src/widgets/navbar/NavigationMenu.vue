<template>
    <v-navigation-drawer v-model="isDrawerActiv" temporary location="right">
        <router-link v-for="item in links" :key="item.name"  class="h-100 text-decoration-none text-black aRoute" :to="item.isActiv ? item.link.path : '' " >
            <v-btn :disabled="!item.isActiv" class="h-100 btn-reserve" >
                {{item.link.meta?.title}} 
            </v-btn>
        </router-link>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
    import { PropType, computed, ref, toRef } from 'vue';
    import { useNavigationMenuStore } from './store';

    const props = defineProps({
        isNavBarActiv: Object as PropType<boolean>
    })
    const isDrawerActiv = toRef(props, 'isNavBarActiv')    
    const navigationMenuStore = useNavigationMenuStore();
    navigationMenuStore.updateLinks();
    
    const links = navigationMenuStore.viewLinks


</script>

<style scoped>
    .btn-reserve:disabled .aRoute {
        cursor: default;
        pointer-events: none    !important;
    }
    .aRoute {
        cursor: default;
    }
</style>