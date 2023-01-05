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
        <template #title> Save change </template>
      </CyanButton>
    </div>

    <br />

    <h1
      class="green text-3xl main-title h-14 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      {{ msg }} helo
    </h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
    <div
      class="my-5 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="../assets/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
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
