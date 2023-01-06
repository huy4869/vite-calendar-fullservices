<script setup lang="ts">
import CyanButton from '@/components/button/CyanButton.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="text-center lg:text-left">
      <CyanButton>
        <template #title> iu Hain </template>
      </CyanButton>
    </div>

    <br />

    <h1
      class="green text-3xl main-title h-14 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      {{ msg }} Hain
    </h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
