<template>
    <v-app-bar>
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

    const emit = defineEmits(['openNavbar'])
    const handleNavbarOpen = () => {
        emit('openNavbar')
    }

</script>