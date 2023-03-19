<template>
  <div class="flex gap-4 flex-wrap justify-center">
    <CardMessage
      v-for="message in messagesData"
      :key="message.id"
      :id="message.id"
      :likes="formatLongNumber(message.likes)"
      :message="message.message"
      :createdAt="formatDate(message.createdAt)"
      :isLiked="message.isLiked"
      :answer="message.answer"
      @onLike="(id) => onClickLike(id, true)"
      @onUnlike="(id) => onClickLike(id, false)"
    />
  </div>
</template>

<script setup lang="ts">
import type { MessageList } from "@/stores/messages";
import { formatDate, formatLongNumber } from "@/utils";
import CardMessage from "./CardMessage.vue";
defineProps({
  messagesData: {
    default: [] as MessageList[],
  },
});

const emit = defineEmits(["onLike"])

const onClickLike = (id: number, isLiked: boolean) => {
  emit("onLike", id, isLiked)
}
</script>

