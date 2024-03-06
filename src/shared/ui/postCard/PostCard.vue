<template>
    <v-card :title="title" :text="text" variant="outlined">
        <v-card-actions>
            <v-btn @click="click"> Перейти </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue' 

    const props = defineProps({
        title: String,
        text: String,
    })

    const emit = defineEmits(['click'])

    const click = () => {
        emit('click')
    }
</script>
