<template>
    <v-navigation-drawer v-model="drawerActiv" temporary location="right">
        <LinksPanel :links="links"/>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
    import LinksPanel from './components/LinksPanel.vue';
    
    import { computed } from 'vue';
    import { useNavigationMenuStore } from './store';

    const props = defineProps({
        modelValue: {type: Boolean, required: true}
    })
    const emit = defineEmits(['update:modelValue'])

    const drawerActiv = computed({
        get: () => props.modelValue,
        set: (value) => {
            emit('update:modelValue', value)
        }
    })

    const navigationMenuStore = useNavigationMenuStore();
    navigationMenuStore.updateLinks();
    const links = navigationMenuStore.viewLinks

</script>

