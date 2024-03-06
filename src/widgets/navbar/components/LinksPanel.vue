<template>
    <v-list>
        <v-list-item v-for="item in links" :key="item.name" >
            <LinkPanelItem> 
                <router-link :class="!item.isActiv && 'a-disabled'" :to="item.isActiv ? item.link.path : ''" >
                    {{item.link.meta?.title}}
                </router-link>
            </LinkPanelItem>
            <LinksPanel v-if="item.childrens" :links="item.childrens"/>
        </v-list-item>    
    </v-list>
</template>

<script lang="ts" setup>
    import LinkPanelItem from '@/shared/ui/appLink/LinkPanelItem.vue'
    import { ViewLinkType } from '../store/';
    const props = defineProps({
        links: Object 
    })

    const links = props.links as ViewLinkType[];

</script>

<style scoped>
    .a-disabled {
        cursor: default;
        pointer-events: none !important;
    }
    a {
        text-decoration: none;
        color: black
    }
</style>