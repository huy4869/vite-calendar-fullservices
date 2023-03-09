<template>
  <div class="w-[450px] bg-bg-02 px-8 py-12 backdrop-blur-xl rounded">
    <p v-if="isTitle" class="text-center pb-6">
      {{ title }}
    </p>
    <slot name="form-component"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  isTitle: {
    type:Boolean,
    default: true,
  }
})

/*  Cach oc cho
export interface Props {
  title?: string
  isTitle?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'hello',
  isTitle: true
})
*/


</script>

<style scoped>

</style>
