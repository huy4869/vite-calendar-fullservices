<template>
  <main>
    <CyanButton @click="login">
      <template #title> iu Hain </template>
    </CyanButton>
    <div v-if="state.logged" class="wrapper">
      <HelloWorld msg="Heloo!" />
    </div>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { reactive } from 'vue'

const state = reactive({
  logged: false,
  count: 1,
})
function login() {
  state.logged = !state.logged
  console.log(state.logged)
}

</script>
