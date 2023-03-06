<template>
  <form class="w-full flex justify-center gap-4" @submit.prevent="onSubmit">
    <span class="w-full bg-dark-50 rounded-lg px-5 py-2 xl:px-6 xl:py-3 text-white" placeholder="Write anonymous message..." role="textbox" @input="onInput" contenteditable>{{ message }}</span>
    <button type="submit"><IconSend class="text-primary w-6 xl:w-8" /></button>
  </form>
</template>

<script setup lang="ts">
import IconSend from '@/components/icons/IconSend.vue';
import { ref } from 'vue';
const message = ref("")
const onSubmit = () => {
  console.log(message.value);
}

const onInput = (e: any) => {
  message.value = e.target.innerText
}

</script>

<style>
[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  font-weight: 400;
  position: absolute;
  color: #9D9CA3;
  background-color: transparent;
}
</style>
