<template>
  <main>
    <h1 class="green text-2xl">Do you love me?</h1>
    <cyan-button @click="$router.push('/hain')">
      <template #title> Yes </template>
    </cyan-button>
    <button class="bg-white text-pink-500 shadow-lg shadow-pink-500/50 font-semibold rounded-lg px-8 my-8 p-2 shadow-pink-500/50 hover:bg-pink-200 active:bg-pink-300 border-solid border border-pink-500">No</button>
  </main>
</template>
