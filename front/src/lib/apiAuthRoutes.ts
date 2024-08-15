import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = BASE_URL + "/api";
export const LOGIN_URL = API_URL + "/auth/login";
export const CHAT_GROUP = API_URL + "/chat-group";
export const CHAT_GROUP_USERS = API_URL + "/chat-group-user";
export const CHATS_URL = API_URL + "/chats";
