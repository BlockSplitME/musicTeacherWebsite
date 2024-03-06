<template>
    <v-app-bar>
        <v-app-bar-title> {{ title }} </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click.stop="handleNavbarOpen" class="h-100 ma-0 pa-0">
            <IconBase view-box="1 1 20 20"  height="15%" width="20">
                <IconMenu />
            </IconBase>
        </v-btn>
    </v-app-bar>

</template>

<script lang="ts" setup>
    import IconBase from '@/shared/assets/iconBase.vue'
    import IconMenu from '@/shared/assets/icons/iconMenu.vue'
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const emit = defineEmits(['openNavbar'])
    const handleNavbarOpen = () => {
        emit('openNavbar')
    }

    const route = useRoute()
    const title = computed(() => {
        return route.meta.title
    }) 

</script>