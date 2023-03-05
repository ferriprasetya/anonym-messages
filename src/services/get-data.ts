import { doc, getDoc, onSnapshot } from "firebase/firestore";
import database from "./firebase-init";

export const getAllMessages = async () => {
  const docRef = doc(database, "messages", "all");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const allMessage = docSnap.data().all_message;
    return allMessage.sort(
      (current: any, next: any) =>
        new Date(current.created_at).getTime() -
        new Date(next.created_at).getTime()
    );
  }
};
