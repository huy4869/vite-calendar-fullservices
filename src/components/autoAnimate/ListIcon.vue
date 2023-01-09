<script setup>
const items = ref(['😏', '😐', '😑', '😒', '😕', '😖', '😗', '😘', '😙', '😛', '😜', '😟', '😦', '😨', '😭', '😮', '😰', '😴', '😵',])
function removeItem(toRemove) {
  items.value = items.value.filter((item) => item !== toRemove)
}
</script>

<template>
  <div class="scroll-down">
    <h5 class="text-sm font-semibold">Click emojis to remove them.</h5>
    <ul v-auto-animate class="flex flex-wrap gap-3 p-0 my-4">
      <li
          class="rounded-md border-solid border border-white w-8 h-8 flex items-center justify-center cursor-pointer"
          v-for="item in items"
          :key="item"
          @click="removeItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
