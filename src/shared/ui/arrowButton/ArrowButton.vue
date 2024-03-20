<template>
    <v-btn rounded="xl" >
        <IconBase :transform="transform">
            <IconChevron />
        </IconBase>
    </v-btn>
</template>

<script lang="ts"setup>
    const props = defineProps({ isForward: {type: Boolean, default: false }})
    
    const transform = props.isForward ? "1 1" : "-1 1"
</script>