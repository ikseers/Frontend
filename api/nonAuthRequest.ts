import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const nonAuthRequest = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default nonAuthRequest;
