import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  onDisconnect,
  remove,
  get,
} from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

export type Message = {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  timestamp: string;
};

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
};

// ⚠️ REPLACE THIS OBJECT WITH THE ACTUAL KEYS FROM YOUR FIREBASE WEB APP DASHBOARD!
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

/**
 * 1. Smart Profile Sync (Finds old user node or makes a new one)
 */
export const registerUserProfile = async (
  username: string,
  avatarSeed: string,
) => {
  const normalizedName = username.trim().toLowerCase();
  const usersRef = ref(db, "chat/users");

  // Look up if this name is already taken in the directory tree
  const snapshot = await get(usersRef);
  let existingUser: Contact | null = null;

  if (snapshot.exists()) {
    const allUsers = snapshot.val();
    const foundId = Object.keys(allUsers).find(
      (uid) => allUsers[uid].name.toLowerCase() === normalizedName,
    );
    if (foundId) {
      existingUser = { id: foundId, ...allUsers[foundId] };
    }
  }

  let uid = "";
  let avatarUrl = "";

  if (existingUser) {
    // Rebind session to existing account
    uid = existingUser.id;
    avatarUrl = existingUser.avatar;

    const userPresenceRef = ref(db, `chat/users/${uid}/isOnline`);
    await set(userPresenceRef, true);
  }
  {
    // Authenticate a fresh account token
    const credential = await signInAnonymously(auth);
    uid = credential.user.uid;
    avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=${avatarSeed}&color=fff`;
  }

  // Write profile details to database node
  const userProfileRef = ref(db, `chat/users/${uid}`);
  await set(userProfileRef, {
    id: uid,
    name: username,
    avatar: avatarUrl,
    isOnline: true,
  });

  // CRITICAL SOCKET FAILSAFE: If connection breaks or page refreshes, remove user node automatically
  const presenceRef = ref(db, `chat/users/${uid}`);
  onDisconnect(presenceRef).remove();

  return { id: uid, name: username, avatar: avatarUrl };
};

/**
 * 2. Get Room ID String Vector
 */
export const getRoomId = (uid1: string, uid2: string) => {
  return uid1 < uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
};

/**
 * 3. Clear Chat Messages inside specific path
 */
export const clearFirebaseChatRoom = async (roomId: string) => {
  const roomMessagesRef = ref(db, `chat/rooms/${roomId}`);
  await remove(roomMessagesRef);
};

/**
 * 4. Monitor Global Network Directory
 */
export const subscribeToGlobalUsers = (
  callback: (users: Contact[]) => void,
) => {
  const usersRef = ref(db, "chat/users");
  return onValue(usersRef, (snapshot) => {
    if (snapshot.exists()) {
      const rawData = snapshot.val();
      const list = Object.keys(rawData).map((uid) => ({
        id: uid,
        name: rawData[uid].name,
        avatar: rawData[uid].avatar,
        isOnline: rawData[uid].isOnline ?? false,
      }));
      callback(list);
    } else {
      callback([]);
    }
  });
};

/**
 * 5. Subscribe to Room Message Packets
 */
export const subscribeToRoomMessages = (
  roomId: string,
  callback: (messages: Message[]) => void,
) => {
  const roomMessagesRef = ref(db, `chat/rooms/${roomId}`);
  return onValue(roomMessagesRef, (snapshot) => {
    if (snapshot.exists()) {
      const rawData = snapshot.val();
      const list = Object.keys(rawData).map((key) => ({
        id: key,
        ...rawData[key],
      }));
      callback(list);
    } else {
      callback([]);
    }
  });
};

/**
 * 6. Send live chat string message
 */
export const sendRoomMessage = async (
  roomId: string,
  senderId: string,
  senderName: string,
  text: string,
) => {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const messagePayload = {
    text,
    senderId,
    senderName,
    timestamp,
  };
  const targetedRoomRef = ref(db, `chat/rooms/${roomId}`);
  await push(targetedRoomRef, messagePayload);
};

/**
 * 7. Check if a username is currently taken by an online user
 */
export const checkUsernameAvailability = async (username: string): Promise<boolean> => {
  if (!username.trim()) return true;
  const normalizedName = username.trim().toLowerCase();
  const usersRef = ref(db, "chat/users");
  
  const snapshot = await get(usersRef);
  if (snapshot.exists()) {
    const allUsers = snapshot.val();
    // Return true only if NO user has this name active right now
    return !Object.keys(allUsers).some(
      (uid) => allUsers[uid].name.toLowerCase() === normalizedName
    );
  }
  return true; // No users in DB means it's available
};