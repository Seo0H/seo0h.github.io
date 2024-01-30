import axios from 'axios';

// TODO: NODE_ENV 추가
const isDev = true;
const BACKEND_API_URL = isDev ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_BACKEND_URL;

const client = axios.create({
  baseURL: BACKEND_API_URL,
});

export default client;
