<template>
  <div class="about">
    <h1>List icon page</h1>
    <ListIcon></ListIcon>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import ListIcon from '@/components/autoAnimate/ListIcon.vue'
</script>
