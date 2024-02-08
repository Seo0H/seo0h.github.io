import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

const BACKEND_API_URL = isDev ? 'https://localhost:8080' : process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const client = axios.create({
  baseURL: BACKEND_API_URL,
});

export default client;
