<template>
  <div class='grid grid-cols-2 bg-login h-100v bg-cover bg-scroll'>
    <div class="grid justify-center items-center">
      <h1>
        <a href="/login">
          <img :src="login" alt="Amaisoft JSC - amaisoft.com">
        </a>
      </h1>
    </div>
    <div class="grid grid-cols-1 items-center justify-items-center	">
      <slot/>
    </div>
  </div>
</template>
<script setup>
import login from '@/assets/logo.svg'
</script>
