<template>
  <form class="w-full flex justify-center gap-4" @submit.prevent="onSubmit">
      <span
        :contenteditable="!isLoading"
        class="w-full bg-dark-50 rounded-lg px-5 py-2 xl:px-6 xl:py-3 text-white"
        placeholder="Write anonymous message..."
        role="textbox"
        @input="onInput"
        @keydown.enter="onSubmit"
        :class="{'border border-red-900': isError}"
        >{{ message }}</span
      >
    <button :disabled="isLoading" type="submit"><IconSend class="text-primary w-6 xl:w-8" /></button>
  </form>
  <span v-if="isError" class="text-red-900 text-xs">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
import IconSend from "@/components/icons/IconSend.vue";
defineProps({
  message: String,
  isError: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: "Input minimum 3 character !"
  },
});
const emit = defineEmits(["onInput", "onSubmit"]);

const onSubmit = () => {
  emit("onSubmit");
};

const onInput = (e: any) => {
  emit("onInput", e.target.innerText);
};
</script>

<style>
[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  font-weight: 400;
  position: absolute;
  color: #9d9ca3;
  background-color: transparent;
}
</style>
