import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import database from "./firebase-init";

const collectionRef = doc(database, "messages", "all");

export const pushNewMessage = async (newMessage: string) => {
  await updateDoc(collectionRef, {
    all_message: arrayUnion({
      id: Date.now(),
      message: newMessage,
      likes: 0,
      created_at: new Date().toISOString(),
      answer: "",
    }),
  });
};

export const updateLikesMessage = async (oldValue: any, likes: boolean) => {
  await updateDoc(collectionRef, {
    all_message: arrayRemove(oldValue),
  });
  await updateDoc(collectionRef, {
    all_message: arrayUnion({
      ...oldValue,
      likes: likes ? Number(oldValue.likes) + 1 : Number(oldValue.likes) - 1,
    }),
  });
};
