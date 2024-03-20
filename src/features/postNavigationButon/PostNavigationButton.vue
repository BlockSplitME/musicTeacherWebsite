<template>
    <AppRouterLink :path="path" @click="emit('click')">
        <IconBase width="100" height="100" :transform="transform">
            <IconArrow />
        </IconBase>
    </AppRouterLink>
</template>

<script setup lang="ts">
    import AppRouterLink from '@/shared/ui/appRouterLink/AppRouterLink.vue';
    
    const props = defineProps({ path: String, isForward: {type: Boolean, default: false }})
    
    const emit = defineEmits(['click'])

    const transform = props.isForward ? "1 1" : "-1 1"
</script>