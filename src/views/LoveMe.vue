<template>
  <div class="container">
    <h1 class="green text-2xl mt-5 font-bold">Do you love me?</h1>
    <cyan-button @click="$router.push('/hain')">
      <template #title> Yes </template>
    </cyan-button>
    <button @mouseover="loveMe"
      id="btnNo"
      ref="btnNo"
      class="absolute ml-4 text-pink-500 shadow-lg shadow-pink-500/50 font-semibold rounded-lg px-8 my-8 p-2 shadow-pink-500/50 hover:bg-pink-200 active:bg-pink-300  border-pink-500">No</button>
  </div>
</template>

<script setup lang="ts">

const btnNo = ref(null)

onMounted(() => {
  console.log(btnNo.value)
})

const loveMe = () => {
  // const x = Math.floor(Math.random() * window.innerWidth)
  // const y = Math.floor(Math.random() * window.innerHeight)
  const x = Math.floor(Math.random() * 400)
  const y = Math.floor(Math.random() * 400)

  document.getElementById('btnNo')!.style.left = x + 'px'
  document.getElementById('btnNo')!.style.top = y + 'px'
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
