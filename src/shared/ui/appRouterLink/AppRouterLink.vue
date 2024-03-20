<template>
    <RouterLink :to="path" @click="emit('click')">
        <slot></slot>
    </RouterLink> 
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { RouteLocationRaw } from 'vue-router';
    
    const props = defineProps({ path: String})
    const path = computed(() => {
        return props.path as RouteLocationRaw
    })
    
    const emit = defineEmits(['click'])
</script>
