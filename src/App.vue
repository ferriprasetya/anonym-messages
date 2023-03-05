<template>
  <form @submit.prevent="sendNewMessage" >
    <input type="text" v-model="newMessage">
    <button type="submit">Send</button>
  </form>
  <h1>Messages: </h1>
  <div v-for="message in messages" :key="message.created_at">
    <h1>{{ message.message }}</h1>
    <p>{{ message.created_at }}</p>
    <p>likes: {{ message.likes }}</p>
    <button @click="likeMessage(message)">Like</button>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {getAllMessages} from "@/services/get-data"
import {pushNewMessage, updateLikesMessage} from "@/services/update-data"
import { onMounted, ref } from 'vue';

const messages = ref([] as any)
const newMessage = ref("")
const getAllMessagesFromFirebase = async() => {
  const allData = await getAllMessages()
  console.log("getData", allData);
  messages.value = allData
}

const sendNewMessage = async () => {
  await pushNewMessage(newMessage.value)
  await getAllMessagesFromFirebase()
}

const likeMessage = async (oldData: any) => {
  await updateLikesMessage(oldData, true)
  await getAllMessagesFromFirebase()
}

onMounted(async () => {
  await getAllMessagesFromFirebase()
  console.log(messages.value);
})
</script>
