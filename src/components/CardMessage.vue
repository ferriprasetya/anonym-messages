<template>
  <div class="w-[500px] h-fit bg-dark-50 rounded-lg py-3 px-4 flex justify-between">
    <div class="flex flex-col gap-3">
      <p class="text-gray">{{ createdAt }}</p>
      <p class="text-xl xl:text-2xl text-white font-medium mr-2">{{ message }}</p>
      <div v-if="answer" class="w-full mt-2 text-xs text-gray">
        <p class="font-semibold">Comment:</p>
        <span class="text-sm">{{ answer }}</span>
      </div>
    </div>
    <div class="flex flex-col items-center text-xs cursor-pointer" :class="isLiked ? 'text-primary' : 'text-gray'" @click="onClickLike" >
      <IconLike />
      <span>{{ likes }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLike from "./icons/IconLike.vue";

const props = defineProps({
  id: Number,
  likes: String,
  message: String,
  createdAt: String,
  isLiked: Boolean,
  answer: String
});

const emit = defineEmits(["onLike", "onUnlike"])

const onClickLike = () => {
  props.isLiked ? emit("onUnlike", props.id) : emit("onLike", props.id)
}
</script>
