<template >
  <div class="post-content" >
    <h2> {{ currentTitle }} </h2> 
    <slot> </slot> 
  </div>
  
</template>

<script setup lang="ts">
  const props = defineProps({
    currentTitle: {type: String,  required: true}
  })
</script>