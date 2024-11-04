import axios from "axios";

export const getCSRFToken = async () => {
  try {
    const { data } = await axios('http://127.0.0.1:8000/token', {
      withCredentials: true,
    });
    window.CSRF_TOKEN = data.csrf_token
  } catch (error) {
    console.error('Could not fetch CSRF token:', error);
  }
};