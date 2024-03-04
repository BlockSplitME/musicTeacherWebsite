<template>
    <svg xmlns="http://www.w3.org/2000/svg" 
      :width="width" 
      :height="height" 
      :viewBox="viewBox" 
      :aria-labelledby="iconName" 
      role="presentation"
    >
      <title :id="iconName" lang="en">{{iconName}} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
</template>
  
<script lang="ts" setup>
  import { defineProps } from 'vue' 
  
  const defaultSize = 18
  
  const props = defineProps({
    iconName: {type: String, default: 'box'},  
    width: {type: [Number, String], default: defaultSize},  
    height: {type: [Number, String], default: defaultSize},  
    iconColor: {type: String, default: 'currentColor'},
    viewBox: {type: String, default: '0 0 ' + defaultSize + ' ' +  defaultSize}  
  })
</script>
  
<style scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
  }
</style>
