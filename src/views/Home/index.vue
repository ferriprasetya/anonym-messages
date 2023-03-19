<template>
  <div class="bg-dark-100 w-screen h-screen p-10 xl:p-24 overflow-hidden">
    <FormInput
      :isError="isErrorInput"
      :message="newMessage"
      :isLoading="isLoading"
      :errorMessage="errorMessage"
      @onInput="onInputMessage"
      @onSubmit="sendNewMessage"
    />
    <img
      v-if="isLoading"
      class="w-48 h-48 mt-10 mx-auto"
      src="@/assets/loading.gif"
      alt="loading"
    />
    <div v-else-if="messageList.length"  class="h-4/5 w-full mt-10 overflow-y-auto hide-scrollbar">
      <ListMessages @onLike="likeMessage" :messagesData="messageList" />
    </div>

    <div class="mt-10 w-full text-center" v-else>
      <img class="w-60 mx-auto" src="@/assets/noData.png" alt="no-data">
      <h1 class="text-2xl text-gray font-medium">No Messages Yet. Be The First Sender!</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListMessages from "@/components/ListMessages.vue";
import FormInput from "@/components/FormInput.vue";
import { onBeforeMount, ref } from "vue";
import { useMessageStore } from "@/stores/messages";
import { storeToRefs } from "pinia";
const store = useMessageStore();

const { onSendNewMessage, onLikeMessage, onGetAllMessages } = store;
const { isLoading, messageList } = storeToRefs(store);

const newMessage = ref("");
const errorMessage = ref("");
const isErrorInput = ref(false);

onBeforeMount(async () => {
  await onGetAllMessages()
})
const onInputMessage = (value: string) => {
  isErrorInput.value = false;
  newMessage.value = value.trim();
};

const sendNewMessage = async () => {
  if (newMessage.value.length < 3) {
    isErrorInput.value = true;
    errorMessage.value = "Input minimum 3 character !"
    return;
  } else if (newMessage.value.length > 200) {
    isErrorInput.value = true;
    errorMessage.value = "Input maximum 200 character !";
    return;
  } {
    await onSendNewMessage(newMessage.value);
    errorMessage.value = ""
    newMessage.value = ""
  }
};

const likeMessage = async (id: number, isLiked: boolean) => {
  await onLikeMessage(id, isLiked)
}
</script>

