import { ref } from "vue";
import { defineStore } from "pinia";
import { getAllMessages } from "@/services/get-data";
import { pushNewMessage, updateLikesMessage } from "@/services/update-data";

export interface MessageList {
  id: number;
  message: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
  answer: string;
}
export const useMessageStore = defineStore("messages", () => {
  const messageList = ref([] as MessageList[]);
  const isLoading = ref(false);
  const likedMessages = ref(
    JSON.parse(localStorage.getItem("liked-messages") || "[]")
  );

  const setLikedMessages = (liked: number[]) => {
    likedMessages.value = liked;
    localStorage.setItem("liked-messages", JSON.stringify(liked));
  };

  const checkIsMessageLiked = (id: number) => {
    return !!likedMessages.value.find((liked: number) => liked === id);
  };

  const onGetAllMessages = async () => {
    isLoading.value = true;
    const response = await getAllMessages();
    messageList.value = response.map((data: any) => ({
      id: data.id,
      likes: data.likes,
      message: data.message,
      createdAt: data.created_at,
      isLiked: checkIsMessageLiked(data.id),
      answer: data.answer,
    }));
    isLoading.value = false;
  };

  const onSendNewMessage = async (newMessage: string) => {
    isLoading.value = true;
    await pushNewMessage(newMessage);
    await onGetAllMessages();
    isLoading.value = false;
  };

  const onLikeMessage = async (id: number, isLiked: boolean) => {
    isLoading.value = true;
    const oldValue = messageList.value
      .filter((message: MessageList) => message.id === id)
      .map((message: MessageList) => ({
        id: message.id,
        likes: message.likes,
        created_at: message.createdAt,
        message: message.message,
        answer: message.answer,
      }))[0];
    isLiked
      ? setLikedMessages([...likedMessages.value, oldValue.id])
      : setLikedMessages(
          likedMessages.value.filter(
            (message: number) => message !== oldValue.id
          )
        );
    await updateLikesMessage(oldValue, isLiked);
    await onGetAllMessages();
    isLoading.value = false;
  };

  return {
    messageList,
    isLoading,
    onGetAllMessages,
    onSendNewMessage,
    onLikeMessage,
    setLikedMessages,
  };
});

