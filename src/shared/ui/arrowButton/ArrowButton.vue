<template>
    <v-btn rounded="xl" @click="emits('click')">
        <IconBase :transform="transform">
            <IconChevron />
        </IconBase>
    </v-btn>
</template>

<script lang="ts"setup>
    const props = defineProps({ isForward: {type: Boolean, default: false }})
    const emits = defineEmits(['click'])
    const transform = props.isForward ? "1 1" : "-1 1"
</script>